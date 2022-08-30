<template>
<nuxt-link
    :to="to"
    :exact-active-class="$style.Active"
    :class="$style.Item"
>
    {{ text }}
</nuxt-link>
</template>

<script setup lang="ts">
defineProps<{
    text: string;
    to?: string;
}>()
</script>

<style module lang="postcss">
.Item {
    @apply block;
    @apply text-primary-300 text-body20;
    @apply px-3;

    &.Active {
        @apply py-2 bg-white bg-opacity-20 rounded-xl;
    }
}
</style>