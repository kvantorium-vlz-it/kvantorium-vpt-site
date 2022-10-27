<script setup lang="ts">
interface INavigationItem {
    label: string;
    to?: string;
}

const navigation = ref<INavigationItem[]>([
    {
        label: 'label',
        to: 'https://google.com'
    },
    {
        label: 'label',
        to: 'https://google.com'
    },
])
</script>

<template>
    <slot :navigation="navigation" />
</template>
