<script setup lang="ts">
const isIndexPage = useRoute().name === 'index'
const { y } = useWindowScroll({ behavior: 'smooth', window: this })

const theHeaderVariant = ref<'filled' | 'blank'>('blank')

onMounted(() => {
    watch(y, () => {
        theHeaderVariant.value = isIndexPage && y.value > 16 ? 'filled' : 'blank'
    })
})
</script>

<template>
    <div :class="$style.app">
        <TheHeader :variant="theHeaderVariant" />
        <NuxtPage />
        <TheFooter />
        <TheCursor />
    </div>
</template>

<style module>
.app {
    background-color: var(--c-site-background);
}
</style>
