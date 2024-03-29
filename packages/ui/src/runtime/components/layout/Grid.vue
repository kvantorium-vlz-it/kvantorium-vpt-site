<script setup lang="ts" generic="T extends Record<string, unknown>">
interface Props {
    items: T[]
    columns?: number
}

withDefaults(defineProps<Props>(), {
    items: () => [],
    columns: 1,
})
</script>

<template>
    <ul :class="$style.grid">
        <li
            v-for="item, index in items"
            :key="index"
        >
            <slot name="item" :item="item"></slot>
        </li>
    </ul>
</template>

<style module>
.grid {
    --columns-count: v-bind(columns);
    --gap: 0.5rem;

    margin: 0;
    padding: 0;

    display: grid;
    grid-template-columns: repeat(var(--columns-count), 1fr);
    grid-template-rows: 1fr;
    gap: var(--gap);

    list-style: none;
}
</style>
