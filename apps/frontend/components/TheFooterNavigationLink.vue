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
        <slot />
    </nuxt-link>
</template>

<style module lang="scss">
@use '@styles/main.scss' as *;

.link {
    color: rgb(var(--c-white));
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }
    @include typo(body-2-normal);
}
</style>
