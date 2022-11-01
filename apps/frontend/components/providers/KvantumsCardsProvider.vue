<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useIndexPageStore } from '@/store/indexPage'

const indexPageStore = storeToRefs(useIndexPageStore())

interface ICard {
    name: string;
    description: string;
    image: string;
    link: string;
}

const cards = computed<ICard[]>(() =>
    indexPageStore.kvantums.value.list.map(kvantum => ({
        description: kvantum.description,
        image: kvantum.image,
        link: kvantum._id,
        name: kvantum.name,
    }))
)
</script>

<template>
    <slot :cards="cards" />
</template>
