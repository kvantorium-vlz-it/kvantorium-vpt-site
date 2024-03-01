<script setup lang="ts">
const isIndexPage = useRoute().name === 'index'
const { y } = useWindowScroll({ behavior: 'smooth' })

const theHeaderVariant = computed(() => isIndexPage && y.value > 16 ? 'filled' : 'blank')
</script>

<template>
    <div>
        <TheHeader :variant="theHeaderVariant" />
        <NuxtPage />
        <TheCursor />
    </div>
</template>
