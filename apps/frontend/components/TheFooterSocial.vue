<script setup lang="ts">
defineProps<{
    icon: string;
    link: string;
    title?: string;
}>()
</script>

<template>
    <a
        :href="link"
        :title="link"
        :class="$style.social"
        target="_blank"
    >
        <img
            :src="icon"
            :alt="title"
            :class="$style.social__image"
            :title="title"
        >
    </a>
</template>

<style module lang="scss">
.social {
    &__image {
        height: var(--fs-body-1);
        width: var(--fs-body-1);
        aspect-ratio: 1;
    }
}
</style>
