<script setup lang="ts">
defineProps<{
    asset: string;
    alt?: string;
}>()
</script>

<template>
    <img :src="asset" :alt="alt" :title="alt">
</template>
