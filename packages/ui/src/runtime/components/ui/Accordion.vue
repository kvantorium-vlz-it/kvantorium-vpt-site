<script setup lang="ts">
import { KAccordionItem } from '#components';

interface AccordionItem {
    slot?: string
    content?: string
    label: string
}

interface Props {
    items: AccordionItem[]
}

defineProps<Props>()
</script>

<template>
    <ul :class="$style.accordion">
        <li
            v-for="item, index in items"
            :key="index"
            :class="$style['list-item']"
        >
            <KAccordionItem
                :class="$style['accordion-item']"
                :label="item.label"
            >
                <slot
                    :name="item.slot || 'content'"
                    :content="item.content"
                >
                    {{ item.content }}
                </slot>
            </KAccordionItem>
        </li>
    </ul>
</template>

<style module>
/* Base styles */

.accordion {
    /* Variables */

    --_border-width: 2px;

    display: flex;
    flex-direction: column;
}
.list-item {
    list-style: none;
}
.accordion-item {
    --_border-width: inherit;
}

/* Fix double border */
.list-item:not(:first-child) {
    margin-top: calc(var(--_border-width) * -1);
}
</style>
