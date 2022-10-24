<template>
    <div style="min-height: 100vh;">
        <the-header />
        <nuxt-page />
        <the-footer />
    </div>
</template>

<script setup lang="ts">
useHead({
    link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    title: 'Кванториум ВПТ'
})
</script>
