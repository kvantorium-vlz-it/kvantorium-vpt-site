<template>
<a
    :href="href"
    :class="$style.Item"
>
    <component :is="icon" :class="$style.Item__icon" />
</a>
</template>

<script setup lang="ts">
import { Component as ComponentType } from 'vue';

defineProps<{
    href: string;
    icon: ComponentType;
}>()
</script>

<style module lang="postcss">
.Item {
    &__icon {
        @apply w-4 h-4;
    }
}
</style>