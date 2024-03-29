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
        <slot name="before"></slot>

        <slot>
            <li
                v-for="item, index in items"
                :key="index"
            >
                <slot name="item" :item="item"></slot>
            </li>
        </slot>

        <slot name="after"></slot>
    </ul>
</template>

<style module>
.grid {
    --columns: v-bind(columns);
    --gap: 0.5rem;

    margin: 0;
    padding: 0;
    list-style: none;

    display: grid;
    grid-template-columns: repeat(var(--columns), 1fr);
    grid-template-rows: 1fr;
    gap: var(--gap);
}

.grid > * {
    width: 100%;
}
</style>
