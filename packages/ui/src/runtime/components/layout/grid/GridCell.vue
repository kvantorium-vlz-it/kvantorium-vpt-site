<script setup lang="ts">
import type {
    UnionStringLiteralsWithNumber,
    UnionStringLiteralsWithString
} from '../../../assets/ts/types';
import { computed } from '#imports';

type CssNumberValue = UnionStringLiteralsWithNumber<'auto'>

interface Props {
    is?: UnionStringLiteralsWithString<'li' | 'div'>

    startColumn?: CssNumberValue
    startRow?: CssNumberValue

    endColumn?: CssNumberValue
    endRow?: CssNumberValue

    width?: number
    height?: number
}

const props = withDefaults(defineProps<Props>(), {
    is: 'div',
    startColumn: 'auto',
    startRow: 'auto',

    height: 1,
    width: 1,
})


/* Variables for sync js and css
 * css variables is overrides js variables for using with media queries
 */
const _endRow = computed(() => props.endRow === undefined
    ? 'var(--end-row)'
    : props.endRow
)
const _endColumn = computed(() => props.endColumn === undefined
    ? 'var(--end-column)'
    : props.endColumn
)
</script>

<template>
    <component
        :is="is"
        :class="$style.column"
    >
        <slot></slot>
    </component>
</template>

<style module>
.column {
    /* Variables for sync js and css
     * css variables is overrides js variables for using with media queries
     */
    --_end-column: var(--end-column, v-bind(_endColumn));
    --_end-row: var(--end-row, v-bind(_endRow));

    --_start-column: var(--start-column, v-bind(startColumn));
    --_start-row: var(--start-row, v-bind(startRow));

    --_cell-width: var(--cell-width, v-bind(width));
    --_cell-height: var(--cell-height, v-bind(height));

    grid-column: var(--_start-column) / var(--_end-column, span var(--_cell-width, 1));
    grid-row: var(--_start-row) / var(--_end-row, span var(--_cell-height, 1));
}
</style>
