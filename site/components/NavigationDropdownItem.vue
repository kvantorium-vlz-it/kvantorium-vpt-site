<!-- Navigation item group for mobile navigation -->
<template>
<details
    ref="details"
    :open="isOpenedOnMount"
    :class="$style.Group"
    @toggle="(e) => $emit('toggle', e)"
>
    <summary
        :class="$style.Group__summary"
    >
        <div :class="$style.Group__name">
            {{ groupName }}
        </div>
        <icons-chevron-icon :class="$style.Group__icon" />
    </summary>
    <ul :class="$style.Group__items">
        <li
            v-for="({ text, to }, index) in items"
            :key="index"
        >
            <navigation-item
                :to="to"
                :text="text"
                :class="$style.Item"
            />
        </li>
    </ul>
</details>
</template>

<script setup lang="ts">
/** Item for group */
export interface groupItem {
    to?: string;
    text: string;
}

withDefaults(defineProps<{
    /**
     * Group name. Showing in `summary` tag
     */
    groupName: string;
    /**
     * Flag for open group on mount
     */
    isOpenedOnMount?: boolean;
    /**
     * Items array for group
     */
    items: groupItem[];
}>(), {
    isOpenedOnMount: false,
})

defineEmits<{
    /**
     * Toggle native event for intellisense outside of component
     */
    (e: 'toggle', event: Event): void;
}>()

/**
 * Details element reference
 */
const details = ref<HTMLDetailsElement>()
</script>

<style module lang="postcss">
.Group {
    &__summary {
        @apply flex justify-between items-center;

        @apply list-none;
        &::webkit-details-marker {
            @apply hidden;
        }
    }

    &__name {
        @apply text-primary-300 text-body20;
    }
    &__icon {
        @apply w-4 h-4;
        @apply fill-primary-300;

        @apply transition-transform duration-700 ease-out;
    }

    &__items {
        @apply flex flex-col gap-1;
        @apply pl-4 mt-2 border-l border-primary-300;
    }

    &[open] > &__summary > &__icon {
        @apply rotate-180;
    }
}
.Item {
    @apply text-body16;
}
</style>