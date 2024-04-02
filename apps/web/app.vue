<script setup lang="ts">
import { ModalsContainer } from 'vue-final-modal'
const isIndexPage = computed(() => useRoute().name === 'index')
const { y } = useWindowScroll({ behavior: 'smooth', window: this })

const theHeaderVariant = ref<'white' | 'blank'>('blank')

onMounted(() => {
    watch([y, isIndexPage], () => {
        if (isIndexPage.value) {
            theHeaderVariant.value = y.value > 16 ? 'white' : 'blank'
        } else {
            theHeaderVariant.value = 'white'
        }
    }, {
        immediate: true,
    })
})
</script>

<template>
    <div :class="$style.app">
        <TheHeader
            :class="$style.header"
            :variant="theHeaderVariant"
        />

        <NuxtPage />

        <TheFooter :class="$style.footer" />

        <TheCursor />

        <ModalsContainer />
    </div>
</template>

<style module>
.app {
    background-color: var(--c-site-background);
}
.header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 20;
}
.footer {
    margin-bottom: var(--site-margin);
    margin-top: 6rem;
}
</style>
