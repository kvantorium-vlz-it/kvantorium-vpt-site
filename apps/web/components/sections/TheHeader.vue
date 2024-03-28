<script setup lang="ts">
import type { RouterLinkProps } from 'vue-router';

type Variant = 'white' | 'blank'

interface Props {
    variant?: Variant
}

withDefaults(defineProps<Props>(), {
    variant: 'blank'
})
const navigation = [
    { label: 'О нас', items: [
        { label: 'Об организации', to: '/about' },
        { label: 'Наша команда', to: '/team' },
        { label: 'Медиа', to: '/media' },
        { label: 'Документы', to: '/documents' },
    ] },
    { label: 'Новости', to: '/news' },
    { label: 'Направления', to: '/kvantums' },
    { label: 'Контакты', to: '#footer' },
]
</script>

<template>
    <KHeader
        :navigation="navigation"
        :variant="variant"
    />
</template>
