<script setup lang="ts">
interface INavigationItem {
    label: string;
    to?: string;
}

const navigation = ref<INavigationItem[]>([])
</script>

<template>
    <slot :navigation="navigation" />
</template>
