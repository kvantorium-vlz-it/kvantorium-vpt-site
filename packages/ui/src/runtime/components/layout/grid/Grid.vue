<script setup lang="ts">
import type { UnionStringLiteralsWithString } from '../../../assets/ts/types'

interface Props {
    columns?: number
    is?: UnionStringLiteralsWithString<'div' | 'ul' | 'ol'>
    sameHeightRows?: boolean
}

withDefaults(defineProps<Props>(), {
    is: 'div',
    columns: 12,
    sameHeightRows: false,
})
</script>

<template>
    <component
        :is="is"
        :class="[
            $style.grid,
            {
                [$style['same-height']]: sameHeightRows,
            },
        ]"
    >
        <slot></slot>
    </component>
</template>

<style module>
.grid {
    --columns: v-bind(columns);
    --gap: 0.5rem;

    display: grid;
    grid-template-columns: repeat(var(--columns), 1fr);
    gap: var(--gap);

    margin: 0;
    padding: 0;
    list-style: none;
}
.same-height {
    grid-auto-rows: 1fr;
}
</style>
