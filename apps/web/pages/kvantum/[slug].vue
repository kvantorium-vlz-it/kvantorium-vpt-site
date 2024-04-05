<script setup lang="ts">
const { params: { slug } } = useRoute()

const { data: kvantum } = useSanityQuery<{
    _id: string
    name: string
    topics: string[]
    minAge: number
    icon: string
    slug: string
    teachers: {
        name: string
        surname: string
        patronymic: string
        curriculas: {
            hoursPerYear: {
                firstHalf: number
                secondHalf: number
            }
            ageFrom: number
            ageTo: number
            description: any[]
            schedule: {
                count: number
                hours: number
            }
            studentsCount: number
            name: string
            interview: boolean
            level: 'Вводный' | 'Углубленный' | 'Проектный'
        }[]
    }[]
}>(groq`
*[_type == 'kvantum' && slug.current == $slug] {
    _id,
    name,
    topics,
    minAge,
    'icon': icon.asset->url,
    'slug': slug.current,
    'teachers': *[_type == 'employee' && isTeacher] {
        _id,
        name,
        surname,
        patronymic,
        'curriculas': *[
            _type == 'curricula' && references(^._id) && ^.^._id == kvantum._ref
        ] {
            _id,
            ageFrom,
            ageTo,
            interview,
            name,
            hoursPerYear,
            studentsCount,
            schedule,
            level,
            'description': description[]{
                ...,
                _type == "imageBlock" => {
                    ...,
                    'image': image.asset->url,
                }
            },
        },
    }[count(@.curriculas) != 0]
}[0]
`, {
    slug,
})
</script>

<template>
    <div :class="$style.page">
        <template v-if="kvantum">
            <img :src="kvantum.icon" alt="">

            <h1>
                {{ kvantum.name }}
            </h1>

            <p>
                Возрастная категория: {{ kvantum.minAge }}+
            </p>

            <ol :class="$style.topics">
                <li v-for="topic, index in kvantum.topics" :key="index">
                    {{ topic }}
                </li>
            </ol>

            <h2>
                Программы
            </h2>

            <KGrid :columns="kvantum.teachers.length > 1 ? 2 : 1">
                <KGridCell v-for="teacher in kvantum.teachers">
                    <h3>
                        {{ teacher.name }} {{ teacher.surname }} {{ teacher.patronymic }}
                    </h3>

                    <KCollapsibleGroup is="ul" is-multiple>
                        <KCollapsible is="li" v-for="curricula in teacher.curriculas">
                            <template #trigger>
                                <h4>
                                    {{ curricula.name }}
                                </h4>
                            </template>

                            <div style="text-align: start;">
                                <p>
                                    Возраст: {{ curricula.ageFrom }}-{{ curricula.ageTo }} лет
                                </p>

                                <p>
                                    Уровень: {{ curricula.level }}
                                </p>

                                <p>
                                    Собеседование {{ curricula.interview ? 'да' : 'нет' }}
                                </p>

                                <p>
                                    Количество часов в год: {{ curricula.hoursPerYear.firstHalf }}/{{ curricula.hoursPerYear.secondHalf }}
                                </p>

                                <p>
                                    Режим занятий: {{ curricula.schedule.count }} раза в неделю по {{ curricula.schedule.hours }} академических часа
                                </p>

                                <p>
                                    Количество мест – 1 группа - {{ curricula.studentsCount }} чел.
                                </p>

                                <div>
                                    <BlockContent v-if="curricula.description" :blocks="curricula.description" />
                                </div>
                            </div>
                        </KCollapsible>
                    </KCollapsibleGroup>
                </KGridCell>
            </KGrid>
        </template>

        <h1 v-else>
            Квантум не найден
        </h1>
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
</style>
