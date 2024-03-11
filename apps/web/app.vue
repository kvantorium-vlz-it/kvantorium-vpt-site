<script setup lang="ts">
const isIndexPage = computed(() => useRoute().name === 'index')
const { y } = useWindowScroll({ behavior: 'smooth', window: this })

const theHeaderVariant = ref<'filled' | 'blank'>('blank')

onMounted(() => {
    watch([y, isIndexPage], () => {
        if (isIndexPage.value) {
            theHeaderVariant.value = y.value > 16 ? 'filled' : 'blank'
        } else {
            theHeaderVariant.value = 'filled'
        }
    }, {
        immediate: true,
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
