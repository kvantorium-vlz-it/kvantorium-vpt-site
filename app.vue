<template>
    <div :class="$style.app">
        <the-header />
        <main :class="$style.app__main">
            <nuxt-page />
        </main>
        <the-footer />
    </div>
</template>

<script setup lang="ts">
useHead({
    link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
    title: 'Кванториум ВПТ'
})
</script>

<style module lang="scss">
.app {
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    min-height: 100vh;

    &__main {
        flex: 1 0 0;
    }
}
</style>
