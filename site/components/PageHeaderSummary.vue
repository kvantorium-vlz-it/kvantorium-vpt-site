<!-- Header summary component -->
<template>
<div :class="$style.Summary">
    <nuxt-link to="/">
        <kvantorium-logo />
    </nuxt-link>
    <page-header-summary-button @click="$emit('menuButtonClick')" />
</div>
</template>

<script setup lang="ts">
defineEmits<{
    /**
     * Open menu button event
     */
    (e: 'menuButtonClick'): void;
}>()
</script>

<style module lang="postcss">
.Summary {
    @apply page-section bg-primary-800;
    @apply flex justify-between gap-2 items-center;
}
</style>