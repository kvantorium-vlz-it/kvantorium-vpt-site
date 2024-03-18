<script setup lang="ts">
const { params: { slug } } = useRoute()

const { data: kvantum } = useSanityQuery<{
    _id: string
    name: string
    topics: string[]
    minAge: number
    icon: string
    slug: string
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
        teacher: {
            name: string
            surname: string
            patronymic: string
            _id: string
        }
    }[]
}>(groq`
    *[_type == 'kvantum' && slug.current == $slug][0] {
        _id,
        name,
        topics,
        minAge,
        'icon': icon.asset->url,
        'slug': slug.current,

        'curriculas': *[_type == 'curricula' && references(^._id)] {
            hoursPerYear,
            ageFrom,
            ageTo,
            'description': description[]{
                ...,
                _type == "imageBlock" => {
                    ...,
                    'image': image.asset->url,
                }
            },
            schedule,
            studentsCount,
            level,
            teacher-> {
                _id,
                name,
                surname,
                patronymic,
            },
            name,
            interview,
        }
    }
`, {
    slug,
})
console.log(kvantum.value?.curriculas);
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

            <div v-for="curricula in kvantum.curriculas">

                <h3>
                    {{ curricula.name }}
                </h3>

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
                    <NewsContentBlock :blocks="curricula.description" />
                </div>
            </div>
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
