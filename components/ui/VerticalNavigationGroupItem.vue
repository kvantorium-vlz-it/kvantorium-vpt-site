<template>
<details :class="$style.Group">
    <summary :class="$style.Group__label">
        <h4>
            {{ label }}
        </h4>
        <chevron-icon :class="$style.Group__icon"/>
    </summary>
    <ul :class="$style.Group__items">
        <li
            v-for="(item, index) in items"
            :key="index"
        >
            <vertical-navigation-item
                v-bind="item"
                :class="$style.Group__item"
            />
        </li>
    </ul>
</details>
</template>

<script setup lang="ts">
interface item {
    text: string;
    to?: string;
}

defineProps<{
    label: string;
    items: item[];
}>()
</script>

<style module lang="postcss">
.Group {
    @apply pl-3;

    &__label {
        @apply text-primary-300 text-body20;

        @apply flex justify-between items-center gap-2;
        @apply list-none;
        &::webkit-details-marker {
            @apply hidden;
        }
    }

    &[open] > &__label > &__icon {
        @apply rotate-180;
    }
    &__icon {
        @apply fill-primary-300 w-4 h-4;
        @apply transition-transform duration-700 ease-out;
    }

    &[open] > &__items {
        @apply flex;
    }
    &__items {
        @apply hidden;
        @apply flex-col gap-2;
        @apply border-l-primary-300 border-l;
        @apply pl-3 mt-2;
    }
    &__item {
        @apply text-body16;
    }
}
</style>