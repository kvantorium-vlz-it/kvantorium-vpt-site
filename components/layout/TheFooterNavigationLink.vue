<script setup lang="ts">
defineProps<{
    to?: string;
}>()
</script>

<template>
    <nuxt-link
        :to="to"
        :class="$style.link"
    >
        <slot></slot>
    </nuxt-link>
</template>

<style module lang="scss">
@use '@/assets/css/mixins' as *;

.link {
    color: rgb(var(--c-primary-100));
    text-decoration: none;

    @include typo-body-2;

    transition: color ease-out 0.3s;

    &:hover {
        color: rgb(var(--c-primary-300));
        text-decoration: underline;
    }
}
</style>
