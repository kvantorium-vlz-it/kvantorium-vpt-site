<script setup lang="ts">
import { Primitive, type PrimitiveProps } from 'radix-vue'

const props = withDefaults(defineProps<PrimitiveProps>(), {
    as: 'section'
})
</script>

<template>
    <Primitive
        class="my-24"
        :="props"
    >
        <slot></slot>
    </Primitive>
</template>
