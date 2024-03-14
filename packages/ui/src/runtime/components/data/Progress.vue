<script setup lang="ts">
import { computed } from '#imports';
import { clamp } from '@vueuse/core';

interface Props {
    value: number
    max?: number
}

const props = withDefaults(defineProps<Props>(), {
    max: 5,
})

const completed = computed(() => {
    const newValue = clamp(props.value, 0, props.max)
    return clamp(newValue, 0, props.max) / props.max * 100
})
</script>

<template>
    <div
        :class="$style.progress"
        :style="{
            '--completed': `${completed}%`,
        }"
    ></div>
</template>

<style module>
.progress {
    --line-color: var(--c-site-background-darker-2);
    --completed-color: var(--c-site-primary);

    --completed: 0%;

    --_height: 2px;

    position: relative;
    height: calc(var(--_height) * 2);
    padding-bottom: var(--_height);

    border-top: var(--_height) solid var(--line-color);
}
.progress::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    right: calc(100% - var(--completed));
    height: var(--_height);

    background-color: var(--completed-color);
}
</style>
