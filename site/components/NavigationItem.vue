<!-- Navigation item for mobile navigation -->
<template>
<nuxt-link
    :to="to"
    :exact-active-class="$style.Active"
    :class="$style.Item"
>
    <!-- @slot Text for item -->
    <slot>
        {{ text }}
    </slot>
</nuxt-link>
</template>

<script setup lang="ts">
defineProps<{
    /**
     * Text for item
     * 
     * Using with slot will ignore prop
     */
    text?: string;
    /**
     * `To` prop for nuxt-link
     */
    to?: string;
}>()
</script>

<style module lang="postcss">
.Item {
    @apply text-primary-300 text-body20 flex items-center;

    &.Active {
        @apply bg-primary-300 bg-opacity-20;
        @apply w-full pl-2;
        @apply border-l border-primary-300 rounded-tr-full rounded-br-full;
    }
}
</style>