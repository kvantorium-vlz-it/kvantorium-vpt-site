<script setup lang="ts">
import TheHeroCurriculaCursor from './TheHeroCurriculaCursor.vue'

interface Props {
    name: string
    to?: string
}

defineProps<Props>()

const { changeCursor, clearCursor } = useGlobalCursor()
</script>

<template>
    <NuxtLink
        @mouseover="() => {
            changeCursor({
                cursor: {
                    component: TheHeroCurriculaCursor,
                    attrs: { name: name }
                },
            })
        }"
        @mouseout="() => {
            clearCursor()
        }"
        :to="to"
        :class="$style.curricula"
    >
        {{ name }}
        <Icon name="ph:arrow-up-right" />
    </NuxtLink>
</template>

<style module>
.curricula {
    border: 1px solid var(--c-site-background);
    text-decoration: none;
    color: var(--c-site-background);
    display: inline-flex;
    padding: 0.25rem 1rem;
    border-radius: 100vw;
    align-items: center;
    gap: 0.25rem;
    font-size: 1rem;
    font-family: 'Circe';
}
</style>
