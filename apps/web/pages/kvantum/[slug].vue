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

const { data: rawKvantums } = useSanityQuery<{
    minAge: number
    name: string
    icon: string
    slug: string
    topics: string[]
}[]>(groq`
    *[_type == 'kvantum'] {
        minAge,
        name,
        'icon': icon.asset->url,
        'slug': slug.current,
        topics,
    }
`)

const kvantums = computed(() => rawKvantums.value?.map((kvantum) => ({
    name: kvantum.name,
    imageURL: kvantum.icon,
    slug: kvantum.slug,
    age: kvantum.minAge,
    topicsList: kvantum.topics,
})) || [])
</script>

<template>
    <div :class="$style.page">
        <template v-if="kvantum">

            <KSection>
                <template #heading>
                <img :src="kvantum.icon" style="display: block; max-width: 20rem; width: 100%; margin-inline: auto; margin-bottom: 2rem;" alt="">
                <h1>
                    {{ kvantum.name }}
                </h1>
                </template>
                <h2 style="margin-inline: auto; width: fit-content;">
                    Возрастная категория: {{ kvantum.minAge }}+
                </h2>

                <ol :class="$style.topics" style="margin-inline: auto; width: fit-content;" >
                    <li v-for="topic, index in kvantum.topics" :key="index">
                        {{ topic }}
                    </li>
                </ol>
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
            </KSection>
        </template>

        <h1 v-else>
            Квантум не найден
        </h1>

        <KSection heading="Другие квантумы">
            <KSwiper
                :items="kvantums"
                :visibleSlidesCount="5"
                :class="$style.swiper"
            >
                <template #slide="{ item }">
                    <TheKvantumsSectionKvantumCard :kvantum="item" />
                </template>

                <template #navigation="{
                    currentSlide,
                    slideToNextSlide,
                    slideToPreviousSlide,
                    slidesCount,
                }">
                    <div :class="$style.navigation">
                        <button :class="$style['pagination-button']"
                            @click="slideToPreviousSlide"
                        >
                            <Icon name="ph:arrow-left" />
                        </button>
                        <button :class="$style['pagination-button']"
                            @click="slideToNextSlide"
                        >
                            <Icon name="ph:arrow-right" />
                        </button>
                    </div>
                </template>
            </KSwiper>
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
