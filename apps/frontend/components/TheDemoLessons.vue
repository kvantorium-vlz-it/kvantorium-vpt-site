<script setup lang="ts">
import { useDemoLessonsStore } from '~/store/demoLessons'

const groupedLessons = useDemoLessonsStore().groupedByDateDemoLessons
</script>

<template>
    <Section heading="Демонстрационные занятия июнь 2023">
        <DemoLessonsSlider
            :grouped-lessons="groupedLessons"
        />
    </Section>
</template>
