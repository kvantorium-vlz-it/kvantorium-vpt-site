<script setup lang="ts">
import { DemoLesson } from '@types';
import { useEmployeesStore } from '~/store/employees';
import { useKvantumsStore } from '~/store/kvantums';

const employeesStore = useEmployeesStore()
const kvantumStore = useKvantumsStore()

const {
    lesson,
} = defineProps<{
    lesson: DemoLesson
}>()

const fromTime = computed(() => {
    const date = new Date(lesson.fromTime)
    return `${date.getHours()}:${date.getMinutes()}`
})

const toTime = computed(() => {
    const hours = Math.floor(lesson.duration)
    const minutes = (lesson.duration % 1) * 60

    const lessonStartDate = new Date(lesson.fromTime)

    const date = new Date(lessonStartDate.setHours(lessonStartDate.getHours() + hours, minutes))

    return `${date.getHours()}:${date.getMinutes()}`
})

const teacher = computed(() => {
    return employeesStore.employees.find((e) => e.id === lesson.teacher)!
})

const kvantum = computed(() => {
    return kvantumStore.kvantums.find((k) => k.id === lesson.kvantum)!
})
</script>

<template>
    <article>
        <div
            class="
                aspect-square bg-center bg-cover relative mb-4
                bg-[url(/images/demo-lessons-image.jpg)]
            "
        >
            <div class="text-center text-white font-bold text-[36px] absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                "{{ lesson.name }}"
                <br>
                <span class="text-[#DEE3FF]">
                    {{ fromTime }}-{{ toTime }}
                </span>
            </div>
            <BaseButton
                class="bottom-6 absolute left-1/2 -translate-x-1/2"
                @click="useModal().open"
            >
                Записаться
            </BaseButton>
        </div>

        <div class="text-center font-semibold text-[26px]">
            <strong class="font-bold">
                {{ kvantum.name }}
            </strong>
            <br>
            Возраст от {{ lesson.fromAge }} до {{ lesson.toAge }}
            <br>
            {{ teacher.firstName }}
            {{ teacher.patronymic!.slice(0, 1).toUpperCase() }}.
            {{ teacher.lastName.slice(0, 1).toUpperCase() }}.
        </div>
    </article>
</template>
