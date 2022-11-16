<script setup lang="ts">
defineProps<{
    to?: string
}>()
</script>

<template>
    <nuxt-link
        :to="to"
        :class="$style.item"
        :exact-active-class="$style.current"
    >
        <slot />
    </nuxt-link>
</template>

<style module lang="scss">
@use '@styles/main.scss' as *;

.item {
    --p-y: #{rem(4px)};
    --p-x: #{rem(12px)};
    --br: var(--br-s);

    display: inline-block;

    padding: var(--p-y) var(--p-x);

    color: rgb(var(--c-white));
    text-decoration: none;

    border-radius: var(--br-8);
    @include typo(body-1-normal);

    // Cursor styles
    /* stylelint-disable-next-line order/order */
    &[href] {
        cursor: pointer;
    }

    &:not(&[href]) {
        cursor: not-allowed;
    }

    // Current modifier
    &.current {
        background-color: rgb(var(--c-white) / 20%);
        @include typo(body-1-bold);
    }

    // Hover effect
    /* stylelint-disable-next-line no-descending-specificity */
    &:hover {
        text-decoration: underline;
    }

    &:hover:not(.current) {
        background-color: rgb(var(--c-white) / 10%);
    }
}
</style>
