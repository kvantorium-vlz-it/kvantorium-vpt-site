<template>
<div :class="$style.App">
    <the-overlay />
    <NuxtPage :class="$style.App__page"/>
    <the-footer />
</div>
</template>

<script setup lang="ts">
useHead({
    link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
})
</script>

<style module lang="postcss">
.App {
    @apply flex flex-col min-h-screen;
    &__page {
        @apply flex-1;
    }
}
</style>