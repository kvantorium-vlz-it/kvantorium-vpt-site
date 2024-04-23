<script setup lang="ts">
import type { CurriculumLevelKey } from 'shared';
import { getCurriculumLevelLabel, capitalizeFirstLetter } from 'shared/utils'

const { params: { slug } } = useRoute()

const { data: kvantum } = useSanityQuery<{
    _id: string
    icon: string
    slug: string
    name: string
    topics: string[]
    description: any[]
    teachers: {
        patronymic: string
        name: string
        surname: string
        _id: string
        curricula: {
            description: any[]
            isInterview: boolean
            level: CurriculumLevelKey
            name: string
            schedule: {
                count: number
                hours: number
            }
            age: {
                from: number
                to: number
            }
            hoursPerYear: {
                firstHalf: number
                secondHalf: number
            }
            studentsInGroup: number
        }[]
    }[]
}>(groq`
*[_type == 'kvantum' && slug.current == $slug] {
    _id,
    'icon': icon.image.asset->url,
    'slug': slug.current,
    name,
    topics,
    'description': description[]{
          ...,
          _type == "imageAsset" => {
              ...,
              'image': image.asset->url,
          }
    },
    'teachers': *[_type == 'employee' && isTeacher] {
        patronymic,
        name,
        surname,
        _id,
        'curricula': *[
          _type == 'curriculum'
          && kvantum._ref == ^.^._id
          && teacher._ref == ^._id
        ] {
            'description': description[]{
                ...,
                _type == "imageAsset" => {
                    ...,
                    'image': image.asset->url,
                }
            },
            isInterview,
            level,
            name,
            schedule,
            age,
            hoursPerYear,
            studentsInGroup,
        }
    }[count(@.curricula) != 0]
}[0]
`, {
    slug,
})

console.log(kvantum);

const { data: rawKvantums } = useSanityQuery<{
    name: string
    icon: string
    slug: string
    topics: string[]
    minAge: number
}[]>(groq`
    *[_type == 'kvantum'] {
        name,
        'icon': icon.image.asset->url,
        'slug': slug.current,
        topics,
        'minAge': math::max([
            math::min(
                *[_type == 'curriculum' && references(^._id)].age.from
            ),
            12
        ])
    }
`)
</script>

<template>
    <div :class="$style.page">
        <template v-if="kvantum">
            <KSection style="max-width: 768px; margin-inline: auto">
                <template #heading>
                    <img :src="kvantum.icon" style="display: block; max-width: 20rem; width: 100%; margin-inline: auto; margin-bottom: 2rem;" alt="">
                    {{ kvantum.name }}
                </template>

                <BlockContent :blocks="kvantum.description"/>
            </KSection>

            <KSection heading="Программы">
                <KGrid :columns="kvantum.teachers.length > 1 ? 2 : 1">
                    <KGridCell v-for="teacher in kvantum.teachers">
                        <KTypography
                            font-family="BankGothic"
                            font-size="h1"
                            :font-weight="500"
                            #="{ classes }"
                        >
                            <h3 :class="[classes]" style="margin-bottom: 2rem; text-align: center;">
                                {{ teacher.name }} {{ teacher.surname }} {{ teacher.patronymic }}
                            </h3>
                        </KTypography>

                        <KCollapsibleGroup is="ul" is-multiple>
                            <KCollapsible is="li" v-for="curricula in teacher.curricula">
                                <template #trigger>
                                    <h4>
                                        {{ curricula.name }}
                                    </h4>
                                </template>

                                <div style="text-align: start;">
                                    <p>
                                        Возраст: {{ curricula.age.from }}-{{ curricula.age.to }} лет
                                    </p>

                                    <p>
                                        Уровень: {{ capitalizeFirstLetter(getCurriculumLevelLabel(curricula.level)) }}
                                    </p>

                                    <p>
                                        Собеседование {{ curricula.isInterview ? 'да' : 'нет' }}
                                    </p>

                                    <p>
                                        Количество часов в год: {{ curricula.hoursPerYear.firstHalf }}/{{ curricula.hoursPerYear.secondHalf }}
                                    </p>

                                    <p>
                                        Режим занятий: {{ curricula.schedule.count }} раза в неделю по {{ curricula.schedule.hours }} академических часа
                                    </p>

                                    <p>
                                        Количество мест – 1 группа - {{ curricula.studentsInGroup }} чел.
                                    </p>

                                    <div>
                                        <BlockContent v-if="curricula.description" :blocks="curricula.description" />
                                    </div>
                                </div>
                            </KCollapsible>
                        </KCollapsibleGroup>
                    </KGridCell>
                </KGrid>
            </KSection>
        </template>

        <h1 v-else>
            Квантум не найден
        </h1>

        <KSection heading="Другие квантумы">
            <KvantumsSwiper :kvantums="rawKvantums || []" />
        </KSection>
    </div>
</template>

<style module>
.page {
    margin-top: 6rem;
    padding-inline: var(--site-margin);
}
.topics {
    list-style-position: inside;
}
.pagination-button {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border: none;
    padding: 0;
    margin: 0;
    background-color: transparent;
    outline: 2px solid var(--c-site-primary);
    border-radius: 100vw;
    aspect-ratio: 1;
    padding: 0.5rem;
    color: var(--c-site-primary);
    cursor: pointer;
}
.navigation {
    display: flex;
    gap: 0.5rem;
    justify-content: center;
    margin-top: 1rem;
}
</style>
