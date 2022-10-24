<script setup lang="ts">
defineProps<{
    to?: string;
}>()
</script>

<template>
    <nuxt-link
        :to="to"
        :class="$style.item"
        :exact-active-class="$style.current"
    >
        <slot></slot>
    </nuxt-link>
</template>

<style module lang="scss">
@use '@/assets/css/mixins' as *;

.item {
    --p-y: 0.25rem;
    --p-x: 0.75rem;
    --br: var(--br-s);

    display: inline-block;

    padding: var(--p-y) var(--p-x);

    color: rgb(var(--c-white));
    text-decoration: none;

    border-radius: var(--br);

    // Cursor styles
    &[href] {
        cursor: pointer;
    }

    &:not(&[href]) {
        cursor: not-allowed;
    }

    // Current modifier
    &.current {
        background-color: rgb(var(--c-white) 0.2);

        @include typo-body-1-bold;
    }

    // Hover effect
    &:hover:not(.current) {
        background-color: rgb(var(--c-white) 0.1);
    }

    @include typo-body-1;
}
</style>
