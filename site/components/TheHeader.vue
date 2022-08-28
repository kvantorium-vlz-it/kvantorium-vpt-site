<template>
<header :class="$style.Header">
    <kvantorium-logo />
    <the-header-menu-button @click="handleMenuButtonClick"/>
</header>
</template>

<script setup lang="ts">
const emit = defineEmits<{
    (e: 'menuButtonClick', event: PointerEvent): void;
}>()

const handleMenuButtonClick = (event: PointerEvent) => emit('menuButtonClick', event)
</script>

<style module lang="postcss">
.Header {
    @apply bg-primary-800 page-section;
    @apply flex items-center justify-between;
}
</style>