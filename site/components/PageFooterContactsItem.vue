<template>
<div :class="$style.Item">
    <div :class="$style.Item__name">
        {{ label }}:
    </div>
    <a :href="href" :class="$style.Item__value">
        {{ value }}
    </a>
</div>
</template>

<script setup lang="ts">
defineProps<{
    /**
     * Label for contact
     */
    label: string;
    /**
     * Value for contact
     */
    value: string;
    /**
     * Href for contact
     * 
     * **Example `href` to email:**
     * ```html
     * <component href="email:foo@bar.baz"/>
     * ```
     */
    href?: string;
}>()
</script>

<style module lang="postcss">
.Item {
    &__name {
        @apply mb-1;
        @apply text-right text-primary-400 text-body16 not-italic;
    }
    &__value {
        @apply block;
        @apply text-right text-primary-300 text-body16 not-italic;
    }
}
</style>