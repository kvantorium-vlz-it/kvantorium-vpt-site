<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useKvantumsStore } from '@/store/kvantums'

interface IItem {
    label: string
    to?: string
}

interface IGroup {
    name: string
    items: IItem[]
}

const {
    kvantums,
} = storeToRefs(useKvantumsStore())

const items: (IItem | IGroup)[] = [
    { label: 'Главная', to: '/' },
    { label: 'Новости', to: '/news' },
    {
        name: 'Квантумы',
        items: kvantums.value.map(kvantum => ({
            label: kvantum.name,
            to: `/kvantum-${kvantum.id}`,
        })),
    },
    {
        name: 'О нас',
        items: [
            { label: 'Сотрудники', to: '/staff' },
            { label: 'Общая информация', to: '/about' },
            { label: 'Документы', to: '/documents' },
        ],
    }
]
</script>

<template>
    <slot :items="items"></slot>
</template>
