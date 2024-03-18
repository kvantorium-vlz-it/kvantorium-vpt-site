<script setup lang="ts">
interface Props {
    image: string
    alt: string
}

defineProps<Props>()
</script>

<template>
    <img
        :src="image"
        :alt="alt"
        :class="[$style.image]"
    >
</template>

<style module>
.image {
    display: block;
    object-fit: cover;
    width: 100%;
    margin-top: 1em;
    margin-bottom: 1em;
}
</style>
