<script setup lang="ts">
type theme = 'dark' | 'light'

withDefaults(defineProps<{
    theme?: theme;
}>(), {
    theme: 'dark'
})
</script>

<template>
    <button
        :class="[
            $style.button,
            $style[theme],
        ]"
    >
        <slot />
    </button>
</template>

<style module lang="scss">
@use '@styles/main' as *;

.button {
    cursor: pointer;

    padding: 0.25rem 1rem;

    color: rgb(var(--color));

    background-color: rgb(var(--bg-color));
    border-color: rgb(var(--bg-color));
    border-style: solid;
    border-width: 1px;
    border-radius: 0.5rem;

    &:hover {
        animation-name: on-hover;
        animation-duration: 0.1s;
        animation-timing-function: ease-out;
        animation-fill-mode: forwards;
    }

    &:active {
        animation-name: on-active;
        animation-duration: 0.3s;
        animation-timing-function: ease-out;
        animation-fill-mode: forwards;
    }

    &.dark {
        --bg-color: var(--c-primary-600);
        --color: var(--c-white);
    }

    &.light {
        --bg-color: var(--c-secondary-200);
        --color: var(--c-primary-500);
    }
    @include typo(body-2-normal);
    @include from-desktop {
        padding: 0.5rem 2rem;
    }
}
@keyframes on-hover {
    100% {
        color: rgb(var(--color) / 50%);
    }
}
@keyframes on-active {
    100% {
        background-color: rgb(var(--bg-color) / 90%);
    }
}
</style>
