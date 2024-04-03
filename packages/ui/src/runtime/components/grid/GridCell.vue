<script setup lang="ts">
import type {
    UnionStringLiteralsWithNumber,
    UnionStringLiteralsWithString
} from '../../assets/ts/types';
import { computed } from '#imports';

type CssNumberValue = UnionStringLiteralsWithNumber<'auto'>

interface Props {
    is?: UnionStringLiteralsWithString<'li' | 'div'>
    startColumn?: CssNumberValue
    endColumn?: CssNumberValue
    startRow?: CssNumberValue
    endRow?: CssNumberValue
    offset?: number
    width?: number
    height?: number
}

const props = withDefaults(defineProps<Props>(), {
    is: 'div',
    startColumn: 'auto',
    endColumn: 'auto',
    startRow: 'auto',
    endRow: 'auto',
})

function generateCellStyles(
    start: Props['startColumn'],
    end: Props['endColumn'],
    width: Props['width'],
): string
function generateCellStyles(
    start: Props['startRow'],
    end: Props['endRow'],
    size: Props['height'],
): string {
    return size === undefined
        ? `${start} / ${end}`
        : `${start} / span ${size}`
}

const gridColumn = computed(() => generateCellStyles(
    props.startColumn,
    props.endColumn,
    props.width
))
const gridRow = computed(() => generateCellStyles(
    props.startRow,
    props.endRow,
    props.height
))
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
    --grid-column: v-bind(gridColumn);
    --grid-row: v-bind(gridRow);

    grid-column: var(--grid-column);
    grid-row: var(--grid-row);
}
</style>
