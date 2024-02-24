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
    text-decoration: none;
    font-family: 'Circe';
    font-size: 1rem;
    padding: 0.25rem 2rem;
    display: inline-flex;
    border-radius: 100vw;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    color: var(--c-site-background);
}
.primary {
    background: linear-gradient(
        90deg,
        var(--c-site-primary),
        var(--c-site-secondary-darker-1)
    );
}
.secondary {
    background: linear-gradient(
        90deg,
        var(--c-site-secondary),
        var(--c-site-secondary-lighter-1)
    );
}
.white {
    border: 2px solid var(--c-site-background);
    background: transparent;
}
</style>
