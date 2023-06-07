<script setup lang="ts">
import { DemoLesson } from '@types'

defineProps<{
    groupedLessons: Map<Date, DemoLesson[]>
}>()
</script>

<template>
    <Slider
        :slides="[...groupedLessons.entries()]"
        class="flex items-center gap-[50px]"
    >
        <template #leftThumb="{ previousSlide }">
            <button
                @click="previousSlide"
            >
                <Icon
                    name="material-symbols:chevron-left"
                    class="text-black w-20 h-20"
                />
            </button>
        </template>
        <template #slide="{ slide }">
            <DemoLessonsSlide
                :date="slide[0]"
                :lessons="slide[1]"
            />
        </template>
        <template #rightThumb="{ nextSlide }">
            <button
                @click="nextSlide"
            >
                <Icon
                    name="material-symbols:chevron-right"
                    class="text-black w-20 h-20"
                />
            </button>
        </template>
    </Slider>
</template>
