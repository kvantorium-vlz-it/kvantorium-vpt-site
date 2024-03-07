<script setup lang="ts">
import type { RouterLinkProps } from 'vue-router';

interface Props extends Omit<RouterLinkProps, 'to'> {
    icon: string
    color: string
    to?: RouterLinkProps['to']
}

const props = withDefaults(defineProps<Props>(), {
    color: '#000000',
})

const colorStyles = computed(() => `color: ${props.color};`)
</script>

<template>
    <NuxtLink
        :="$props"
        :class="$style.link"
    >
        <Icon
            :name="icon"
            :style="colorStyles"
            :class="$style.icon"
        />
    </NuxtLink>
</template>

<style module>
.link {
    display: inline-flex;
    aspect-ratio: 1;
    padding: 0.25rem;
    background-color: var(--c-site-background);
    border-radius: 100vw;
}
.icon {
    font-size: 1rem;
}
</style>
