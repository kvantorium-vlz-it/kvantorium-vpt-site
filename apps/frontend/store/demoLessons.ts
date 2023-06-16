import { defineStore } from 'pinia'
import { DemoLesson } from '@types'

export const useDemoLessonsStore = defineStore('demoLessons', () => {
    const demoLessons = ref<DemoLesson[]>([])

    const groupedByDateDemoLessons = computed(() => {
        const grouped = demoLessons.value
            .reduce((grouped, lesson) => {
                const date = new Date(lesson.fromTime).toISOString().slice(0, 10)

                const lessons = grouped.has(date)
                    ? [...grouped.get(date)!, lesson]
                    : [lesson]

                grouped.set(date, lessons)

                return grouped
            }, new Map<string, DemoLesson[]>())

        return new Map([...grouped.entries()]
            .map(([date, lessons]) => [new Date(date), lessons])
        )
    })

    async function fetchAllDemoLessons() {
        demoLessons.value = await $fetch('/api/demo-lessons')
        return demoLessons
    }

    return {
        fetchAllDemoLessons,
        demoLessons,
        groupedByDateDemoLessons,
    }
})
