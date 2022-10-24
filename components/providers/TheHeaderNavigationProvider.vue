<script setup lang="ts">
export interface INavigationItem {
    to?: string;
    label: string;
}

export interface INavigationGroup {
    name: string;
    items: INavigationItem[];
}

type Navigation = (INavigationGroup | INavigationItem)[]

const navigation: Navigation = [
    {
        label: 'Главная',
        to: '/'
    },
    {
        name: 'Новости',
        items: [
            { label: 'События' },
            { label: 'Мероприятия' }
        ]
    },
    {
        name: 'Квантумы',
        items: [
            { label: 'Промдизайн-квантум' },
            { label: 'Промробо-квантум' },
            { label: 'VR/AR-квантум' },
            { label: 'IT-квантум' },
            { label: 'авто-квантум' },
            { label: 'аэро-квантум' },
            { label: 'хайтек' },
            { label: 'математика' },
            { label: 'технический английский' },
            { label: 'квантошахматы' }
        ]
    },
    {
        name: 'О нас',
        items: [
            { label: 'Общаяя информация' },
            { label: 'Сотрудники' },
            { label: 'Сведения об организации' },
            { label: 'Документы' }
        ]
    }
]

const isGroup = (item: any): item is INavigationGroup => 'name' in item
const isItem = (item: any): item is INavigationItem => 'label' in item
</script>

<template>
    <slot
        :navigation="navigation"
        :is-group="isGroup"
        :is-item="isItem"
    />
</template>
