<script setup lang="ts">
import type { RouterLinkProps } from 'vue-router';

type Variant = 'dark' | 'light'

interface Props extends Omit<RouterLinkProps, 'to'> {
    to?: RouterLinkProps['to']
    label: string
    variant?: Variant
}

withDefaults(defineProps<Props>(), {
    variant: 'light'
})
</script>

<template>
    <NuxtLink
        :="$props"
        :class="[$style.link, $style[variant]]"
    >
        <span
            :class="$style.label"
            :data-content="label"
        >
            {{ label }}
        </span>
    </NuxtLink>
</template>

<style module>
.link {
    --text-color: auto;
    --hover-text-color: auto;
    --hover-line-gap: 0.25rem;
    --line-left-color: var(--c-site-primary-lighter-2);
    --line-right-color: var(--c-site-secondary);

    display: inline-flex;
    justify-content: space-between;
    gap: 0.5rem;

    padding-inline: 1rem;
    padding-block: 0.25rem;
    border-radius: 100vw;

    text-decoration: none;
    color: var(--text-color);
    font-size: 1rem;
    font-weight: 400;
}
.link:hover {
    color: var(--hover-text-color);
}
.light {
    --text-color: var(--c-site-background-darker-2);
    --hover-text-color: var(--c-site-background);
}
.dark {
    --text-color: var(--c-site-text-lighter-2);
    --hover-text-color: var(--c-site-text);
}
.label {
    position: relative;
}
.label::before {
    content: '';

    position: absolute;
    top: calc(100% + var(--hover-line-gap));
    left: 0;
    right: 100%;
    height: 0.125rem;

    transition: 0.2s ease-in;

    background-image: linear-gradient(
        to right,
        var(--line-left-color),
        var(--line-right-color)
    );
}
.link:hover .label::before {
    right: 50%;
}
</style>
