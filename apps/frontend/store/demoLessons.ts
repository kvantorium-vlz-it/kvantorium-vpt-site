import { defineStore } from 'pinia';
import { DemoLesson } from '~/assets/typescript/types';

export const useDemoLessonsStore = defineStore('demoLessons', () => {
    const demoLessons = ref<DemoLesson[]>([])

    const groupedByDateDemoLessons = computed(() => {
        const grouped = demoLessons.value
            .reduce((grouped, lesson) => {
                const date = lesson.date

                if (grouped.has(date)) {
                    grouped.set(date, [...grouped.get(date)!, lesson])
                } else {
                    grouped.set(date, [lesson])
                }

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
