<script setup lang="ts">
type Variant = 'dark' | 'light'

withDefaults(defineProps<{
    variant?: Variant;
}>(), {
    variant: 'dark'
})
</script>

<template>
    <button
        :class="[
            $style.button,
            $style[variant],
        ]"
    >
        <slot />
    </button>
</template>

<style module lang="scss">
@use '@styles/functional' as *;

.button {
    --p-x: #{px-to-rem(16px)};
    --p-y: #{px-to-rem(4px)};

    cursor: pointer;

    display: inline-flex;
    align-items: center;
    justify-content: center;

    padding: var(--p-y) var(--p-x);

    color: rgb(var(--color));

    background-color: rgb(var(--bg-color));
    border: 1px solid rgb(var(--bg-color));
    border-radius: 0.5rem;

    &:hover {
        animation: on-hover 0.1s ease-out forwards;
    }

    &:active {
        animation: on-active 0.3s ease-out forwards;
    }

    &:focus-visible {
        outline: 2px rgb(var(--bg-color)) auto;
        outline-offset: 3px;
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
        --p-y: #{px-to-rem(8px)};
        --p-x: #{px-to-rem(32px)};
    }
}
@keyframes on-hover {
    100% {
        color: rgb(var(--color) / 70%);

        box-shadow: var(--bs-4);
    }
}
@keyframes on-active {
    100% {
        color: rgb(var(--color) / 50%);
    }
}
</style>
