<script setup lang="ts">
import type { UnionStringLiteralsWithString } from '../../../assets/ts/types';

interface Props {
    is?: UnionStringLiteralsWithString<'li' | 'div'>
}

withDefaults(defineProps<Props>(), {
    is: 'div'
})
</script>

<template>
    <component :is="is">
        <slot></slot>
    </component>
</template>
