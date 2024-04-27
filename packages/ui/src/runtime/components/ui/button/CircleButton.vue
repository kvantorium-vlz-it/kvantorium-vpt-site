<script setup lang="ts">
import type { LinkProps } from '../../../assets/ts/types';

interface Props extends LinkProps {
    isDisabled?: boolean
}

withDefaults(defineProps<Props>(), {
    isDisabled: false,
})
</script>

<template>
    <KBaseButton
        :class="$style.button"
        :disabled="isDisabled"
        :="$props, $attrs"
    >
        <slot></slot>
    </KBaseButton>
</template>

<style module>
.button {
    aspect-ratio: 1;

    display: inline-flex;
    justify-content: center;
    align-items: center;

    border-radius: 100vw;
    border: 2px solid var(--c-site-primary);

    background-color: transparent;
    padding: 0.5rem;
    min-width: calc(1rem + 1.5em);
    min-height: calc(1rem + 1.5em);
    color: var(--c-site-primary);
    font-size: 1rem;

    text-decoration: none;
}
.button:focus-visible {
    outline: 2px dashed var(--c-site-background-darker-2);
    outline-offset: 0.125rem;
}
.button:not(:disabled) {
    transition: 0.2s ease-in-out;
    transition-property: color, background-color, translate;
    cursor: pointer;
}
.button:not(:disabled):hover {
    translate: 0 -0.125rem;
}
.button:not(:disabled):active {
    background-color: var(--c-site-primary);
    color: var(--c-site-background);
}
.button:disabled {
    cursor: not-allowed;
    background-color: var(--c-site-background-darker-1);
    border: 2px solid var(--c-site-background-darker-2);
}
</style>
