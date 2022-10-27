<script setup lang="ts">
interface IAdvantage {
    title: string;
    description: string;
    image: string;
}

const advantages = ref<IAdvantage[]>([])
</script>

<template>
    <slot :advantages="advantages" />
</template>
