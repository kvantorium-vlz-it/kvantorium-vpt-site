<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useIndexPageStore } from '@/store/indexPage'

const indexPageStore = storeToRefs(useIndexPageStore())

interface IAdvantage {
    title: string;
    description: string;
    image: string;
}

const advantages = computed<IAdvantage[]>(() => indexPageStore.advantages.value.list)
</script>

<template>
    <slot :advantages="advantages" />
</template>
