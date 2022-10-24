<script setup lang="ts">
type theme = 'dark' | 'light'

withDefaults(defineProps<{
    theme?: theme;
}>(), {
    theme: 'dark',
})
</script>

<template>
    <button
        :class="[
            $style.button,
            $style[theme],
        ]"
    >
        <slot></slot>
    </button>
</template>

<style module lang="scss">
@use '@/assets/css/variables' as *;
@use '@/assets/css/mixins' as *;

.button {
    padding: 0.25rem 1rem;

    cursor: pointer;

    border-width: 1px;
    border-radius: 0.5rem;
    border-style: solid;
    border-color: rgb(var(--bg-color));

    background-color: rgb(var(--bg-color));
    color: rgb(var(--color));

    @include typo-body-2;

    @include from-desktop {
        padding: 0.5rem 2rem;
    }

    &:hover {
        animation-name: onHover;
        animation-duration: 0.1s;
        animation-timing-function: ease-out;
        animation-fill-mode: forwards;
    }

    &:active {
        animation-name: onActive;
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
}

@keyframes onHover {
    100% {
        color: rgba(var(--color), 50%);
    }
}

@keyframes onActive {
    100% {
        background-color: rgba(var(--bg-color), 90%);
    }
}
</style>
