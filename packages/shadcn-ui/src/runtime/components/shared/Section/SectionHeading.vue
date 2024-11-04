<script setup lang="ts">
import { Primitive, type PrimitiveProps } from 'radix-vue';

const props = withDefaults(defineProps<PrimitiveProps>(), {
    as: 'div'
})
</script>

<template>
    <Primitive
        :="props"
        class="font-display text-6xl text-center mb-12 uppercase"
    >
        <slot></slot>
    </Primitive>
</template>
