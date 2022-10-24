<script setup lang="ts">
interface INavigationItem {
    label: string;
    to?: string;
}

const navigation = ref<INavigationItem[]>([
    {
        label: 'gkwalgaw',
        to: 'gjkwa'
    }
])
</script>

<template>
    <slot :navigation="navigation"></slot>
</template>
