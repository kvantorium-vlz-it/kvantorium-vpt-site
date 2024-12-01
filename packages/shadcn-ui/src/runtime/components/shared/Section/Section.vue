<script setup lang="ts">
import { Primitive, type PrimitiveProps } from 'radix-vue'

const props = withDefaults(defineProps<PrimitiveProps>(), {
    as: 'section'
})
</script>

<template>
    <Primitive
        class="my-4 py-6 lg:my-6 lg:py-8"
        :="props"
    >
        <slot></slot>
    </Primitive>
</template>
