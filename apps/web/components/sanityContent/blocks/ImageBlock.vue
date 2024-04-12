<script setup lang="ts">
interface Props {
    image: string
    alt?: string
}

defineProps<Props>()
</script>

<template>
    <img
        :src="image"
        :alt="alt"
        :class="$style.image"
    >
</template>

<style module>
.image {
    display: block;
    width: 100%;
    margin-block: 1em;
    border-radius: 1rem;
}
</style>
