<script setup lang="ts">
import { HeaderNavigationDropdownGroupProps, HeaderNavigationItemProps } from '@types';

type NavigationItem = HeaderNavigationDropdownGroupProps
    | HeaderNavigationItemProps

const items: Array<NavigationItem> = [
    { label: "Главная", to: "/" },
    { label: "Новости", to: "/news" },
    // { label: "3D-тур", to: "/3d-tour" },
    // { label: "Выставка", to: "/exhibition" },
    {
        label: "Программы",
        items: [
            { label: 'Квантумы', to: '/kvantums' },
            // { label: 'Внебюджет', to: '/off-budget' },
        ]
    },
    {
        label: "О нас",
        items: [
            { label: 'Общая информация', to: '/about' },
            { label: 'Документы', to: '/documents' }
        ]
    },
    { label: "Контакты", to: "#footer" },
]

function checkIsGroupItem(
    item: NavigationItem
): item is HeaderNavigationDropdownGroupProps {
    return 'items' in item
}
</script>

<template>
    <slot
        :items="items"
        :checkIsGroupItem="checkIsGroupItem"
    />
</template>
