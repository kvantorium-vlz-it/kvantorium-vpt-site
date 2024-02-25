<script setup lang="ts">
import type { RouterLinkProps } from 'vue-router';

type ButtonVariants = 'primary' | 'secondary' | 'white'

interface Props extends Omit<RouterLinkProps, 'to'> {
    variant?: ButtonVariants
    to?: RouterLinkProps['to']
}

withDefaults(defineProps<Props>(), {
    variant: 'primary'
})
</script>

<template>
    <NuxtLink
        :class="[$style.button, $style[variant]]"
        :="$props"
    >
        <slot></slot>
    </NuxtLink>
</template>

<style module>
.button {
    --background-color: transparent;
    --gradient-left-color: transparent;
    --gradient-right-color: transparent;
    --border-color: transparent;
    --text-color: var(--c-site-background);

    --_border-width: 0.125rem;

    display: inline-flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    padding: 0.25rem 2rem;

    outline-color: var(--border-color);
    outline-width: var(--_border-width);
    outline-offset: calc(var(--_border-width) * -1);
    outline-style: solid;
    border-radius: 100vw;

    color: var(--text-color);
    font-family: 'Circe';
    font-size: 1rem;
    text-decoration: none;

    background-color: var(--background-color);
    background-image: linear-gradient(
        90deg,
        var(--gradient-left-color),
        var(--gradient-right-color)
    );
}
.primary {
    --gradient-left-color: var(--c-site-primary);
    --gradient-right-color: var(--c-site-secondary-darker-1);
}
.secondary {
    --gradient-left-color: var(--c-site-secondary);
    --gradient-right-color: var(--c-site-secondary-lighter-1);
}
.white {
    --border-color: var(--c-site-background);
}
</style>
