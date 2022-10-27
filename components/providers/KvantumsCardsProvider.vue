<script setup lang="ts">

interface ICard {
    name: string;
    description: string;
    image: string;
    link: string;
}

const cards = ref<ICard[]>([])
</script>

<template>
    <slot :cards="cards" />
</template>
