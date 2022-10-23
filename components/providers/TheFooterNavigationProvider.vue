<script setup lang="ts">
interface INavigationItem {
    label: string;
    to?: string;
}

const navigation = ref<INavigationItem[]>([
    {
        label: 'hgjwag',
    },
    {
        label: 'hgjwag',
    },
    {
        label: 'hgjwag',
    }
])
</script>

<template>
    <slot :navigation="navigation"></slot>
</template>
