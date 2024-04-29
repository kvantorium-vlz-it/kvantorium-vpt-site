<script setup lang="ts">
import type { LinkProps } from '../../../assets/ts/types';

interface Props extends LinkProps {
    isDisabled?: boolean
    iconName: string
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
        <KCircleIcon
            :icon-name="iconName"
            variant="primary"
            :class="$style.icon"
        >
            <slot></slot>
        </KCircleIcon>
    </KBaseButton>
</template>

<style module>
.button {
    display: inline-flex;
    justify-content: center;
    align-items: center;

    text-decoration: none;
    border: none;
    background-color: transparent;
    border-radius: 100vw;
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
.button > .icon {
    transition: all 0.1s ease-in-out;
}
.button:not(:disabled):active > .icon {
    --background-color: var(--c-site-primary);
    --icon-color: var(--c-site-background);
}
.button:disabled > .icon {
    cursor: not-allowed;
    --background-color: var(--c-site-background-darker-1);
    --border-color: var(--c-site-background-darker-2);
    --icon-color: var(--c-site-text-lighter-2);
}
</style>
