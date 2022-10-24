<script setup lang="ts">
defineProps<{
    icon: string;
    link: string;
}>()
</script>

<template>
    <a
        :href="link"
        target="_blank"
    >
        <nuxt-icon
            :name="icon"
            fill
        />
    </a>
</template>

<style module lang="scss">
$size: 1.5rem;

.social {
    aspect-ratio: 1;
    width: $size;
    height: $size;
}
</style>
