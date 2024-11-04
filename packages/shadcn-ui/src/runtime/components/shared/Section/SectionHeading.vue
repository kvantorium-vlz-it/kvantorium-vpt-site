<script setup lang="ts">
import { Primitive, type PrimitiveProps } from 'radix-vue';

const props = withDefaults(defineProps<PrimitiveProps>(), {
    as: 'div'
})
</script>

<template>
    <Primitive
        :="props"
        class="font-display text-6xl text-center mb-12"
    >
        <slot></slot>
    </Primitive>
</template>
