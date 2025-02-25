<script setup lang="ts">
import type { CurriculumCardProps } from './CurriculumCard.vue'

withDefaults(defineProps<{
    curricula?: CurriculumCardProps['curriculum'][]
}>(), {
    curricula: () => [],
})
</script>

<template>
    <ul class="grid grid-cols-1 laptop:grid-cols-2 desktop:grid-cols-3 gap-2">
        <li
            v-for="curriculum in curricula"
            :key="curriculum._id"
        >
            <CurriculumCard
                :curriculum="curriculum"
                class="h-full"
            />
        </li>
    </ul>
</template>
