<script setup lang="ts">
interface Props {
    name: string
}
defineProps<Props>()
</script>

<template>
    <div :class="$style.cursor">
        Подробнее о<br>
        {{ name }}
    </div>
</template>

<style module>
.cursor {
    transform: translate(-50%, -50%);
    aspect-ratio: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100vw;
    background-color: rgba(255, 255, 255, 0.2);
    box-shadow: 0 0 0.5rem 0 rgba(0, 0, 0, 0.3);
    color: var(--c-site-background);
    backdrop-filter: blur(0.1rem);
    padding: 1rem;
    text-align: center;
    font-size: 1.25rem;
}
</style>
