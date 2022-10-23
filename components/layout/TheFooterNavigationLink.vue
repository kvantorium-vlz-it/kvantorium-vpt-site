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
.link {
    font-size: var(--fs-body-2);
    color: rgb(var(--c-primary-100));
}
</style>
