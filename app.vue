<template>
    <div :class="$style.app">
        <the-header :class="$style.app__header" />
        <nuxt-page :class="$style.app__main" />
        <the-footer />
    </div>
</template>

<script setup lang="ts">
useHead({
    link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
    title: 'Кванториум ВПТ',
    script: [
        {
            src: 'https://api-maps.yandex.ru/2.1/?apikey=ваш API-ключ&lang=ru_RU',
            type: 'text/javascript'
        }
    ]
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

    &__header {
        z-index: var(--z-overlay);
    }
}
</style>
