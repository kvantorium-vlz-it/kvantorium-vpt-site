<script setup lang="ts">
type Variant = 'dark' | 'light'

const props = withDefaults(defineProps<{
    variant?: Variant
    to?: string
}>(), {
    variant: 'dark',
})

const classes = ref([
    useCssModule().button,
    useCssModule()[props.variant],
])
</script>

<template>
    <NuxtLink
        v-if="to"
        :class="classes"
        :to="to"
    >
        <slot />
    </NuxtLink>
    <button
        v-else
        :class="classes"
    >
        <slot />
    </button>
</template>

<style module lang="scss">
@use '@styles/main.scss' as *;
.button {
    --p-x: #{rem(16px)};
    --p-y: #{rem(4px)};

    cursor: pointer;

    display: inline-flex;
    align-items: center;
    justify-content: center;

    padding: var(--p-y) var(--p-x);

    color: rgb(var(--color));
    background-color: rgb(var(--bg-color));

    border: none;
    border-radius: 0.5rem;

    outline-offset: rem(2px);
    outline-width: rem(3px);
    outline-color: rgb(var(--outline-color) / 50%);

    text-decoration: none;

    &:focus-visible,
    &:hover {
        outline-style: solid;
    }

    &.dark {
        --bg-color: var(--c-primary-600);
        --color: var(--c-white);
        --outline-color: var(--bg-color);
    }
    &.light {
        --bg-color: var(--c-secondary-200);
        --color: var(--c-primary-500);
        --outline-color: var(--color);
    }

    @include typo(body-2-normal);
    @include from-breakpoint(desktop) {
        --p-y: #{rem(8px)};
        --p-x: #{rem(32px)};
    }
}
</style>
