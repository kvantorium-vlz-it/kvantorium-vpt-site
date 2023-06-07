<script setup lang="ts">
import { DemoLesson } from '@types';

const days = [
    'понедельник',
    'вторник',
    'среда',
    'четверг',
    'пятница',
    'суббота',
    'воскресенье',
] as const

const months = [
    'января',
    'февраля',
    'марта',
    'апреля',
    'мая',
    'июня',
    'июля',
    'августа',
    'сентября',
    'октября',
    'ноября',
    'декабря',
]
const {
    date,
    lessons,
} = defineProps<{
    date: Date
    lessons: DemoLesson[]
}>()

const dayOfWeek = computed(() => days[date.getDay()])
const month = computed(() => months[date.getMonth()])
</script>

<template>
    <SliderSlide>
        <div class="text-[30px] font-bold text-[#313340] mb-[30px]">
            {{ dayOfWeek }} {{ date.getDate() }} {{ month }}
        </div>

        <ul class="grid grid-cols-3 gap-[90px]">
            <li v-for="lesson in lessons">
                <DemoLessonCard
                    :lesson="lesson"
                />
            </li>
        </ul>
    </SliderSlide>
</template>
