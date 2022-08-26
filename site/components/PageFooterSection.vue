<!-- Component for footer section -->
<template>
<section :class="$style.Section">
    <h4 :class="$style.Section__name">
        {{ name }}
    </h4>
    <div :class="$style.Section__body">
        <!-- @slot Section content -->
        <slot></slot>
    </div>
</section>
</template>

<script setup lang="ts">
defineProps<{
    /**
     * Section name
     */
    name: string;
}>()
</script>

<style module lang="postcss">
.Section {
    @apply w-fit;

    &__name {
        @apply text-primary-300 text-body20 pb-1;
        @apply border-b border-b-primary-400;
    }
    &__body {
        @apply pr-2;
    }
}
</style>