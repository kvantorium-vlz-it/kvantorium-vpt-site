<template>
<nuxt-link
    :to="to"
    :class="$style.Item"
>
    {{ text }}
</nuxt-link>
</template>

<script setup lang="ts">
defineProps<{
    to?: string;
    text: string;
}>()
</script>

<style module lang="postcss">
.Item {
    @apply block text-body16 text-right text-primary-300;
}
</style>