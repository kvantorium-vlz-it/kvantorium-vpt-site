<script setup lang="ts">
import type { RouterLinkProps } from '#vue-router'

type Variant = 'dark' | 'light'

interface Props extends Omit<RouterLinkProps, 'to'> {
    to?: RouterLinkProps['to']
    variant?: Variant
}

withDefaults(defineProps<Props>(), {
    variant: 'light',
})
</script>

<template>
    <KBaseTypography
        variant="body-3"
        #default="{ classes }"
    >
        <NuxtLink
            :class="[classes, $style.link, $style[variant]]"
            :="$props, $attrs"
        >
            <slot></slot>
        </NuxtLink>
    </KBaseTypography>
</template>

<style module>
/* Base styles */

.link {
    /* Variables */

    --text-color: var(--c-site-background);
    --underline-color: transparent;
    --underline-gradient-left-color: transparent;
    --underline-gradient-right-color: transparent;

    /* Hover variables */

    --hover-text-color: var(--text-color);

    color: var(--text-color);
    text-decoration: none;

    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    border-radius: 100vw;

    position: relative;
}
.link::after {
    content: '';

    position: absolute;
    bottom: 0;
    left: 0;
    right: 100%;
    height: 0.125rem;

    background-color: var(--underline-color);
    background-image: linear-gradient(
        90deg,
        var(--underline-gradient-left-color),
        var(--underline-gradient-right-color)
    );

    transition: right 0.2s ease;
}

/* States */

.link:focus-visible {
    outline-color: var(--outline-color);
    outline-width: 0.125rem;
    outline-offset: 0.25rem;
    outline-style: dashed;
}
.link:hover {
    color: var(--hover-text-color);
}

/* Hover animation */

.link:hover::after {
    left: 0;
    right: 0;
}

/* Variants */

.light {
    --text-color: var(--c-site-background-darker-1);
    --hover-text-color: var(--c-site-background);
    --underline-color: var(--c-site-background);
}
.dark {
    --text-color: var(--c-site-text-lighter-1);
    --hover-text-color: var(--c-site-text);
    --underline-gradient-left-color: var(--c-site-primary);
    --underline-gradient-right-color: var(--c-site-secondary);
}
</style>
