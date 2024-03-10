<script setup lang="ts">
import type { RouterLinkProps } from '#vue-router';

interface Props extends Omit<RouterLinkProps, 'to'> {
    label: string
    to?: RouterLinkProps['to']
    icon?: string
}

const { label } = withDefaults(defineProps<Props>(), {
    icon: 'ph:arrow-up-right'
})
</script>

<template>
    <NuxtLink :class="$style.link" :="$props">
        <Icon :name="icon" :class="$style.icon" />

        <span :class="$style.label">
            {{ label }}
        </span>
    </NuxtLink>
</template>

<style module>
.link {
    color: var(--c-site-background);
    display: inline-flex;
    gap: 0.5rem;
    align-items: center;
    text-decoration: none;
}
.icon {
    font-size: 1rem;
    aspect-ratio: 1;
    flex-shrink: 0;
}
.label {
    font-size: 0.75rem;
    font-family: 'Circe';
    flex: 1 0 0;
}
</style>
