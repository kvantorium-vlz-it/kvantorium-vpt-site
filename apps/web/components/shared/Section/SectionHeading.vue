<script setup lang="ts">
import { Primitive, type PrimitiveProps } from 'radix-vue'
import { cn } from '@/lib/utils'

const props = withDefaults(defineProps<PrimitiveProps>(), {
    as: 'div'
})
</script>

<template>
    <Primitive
        :="props"
        :class="cn(
            `
            font-serif font-semibold text-5xl
            text-center leading-heading -tracking-tight
            mb-6
            `
        )"
    >
        <slot></slot>
    </Primitive>
</template>
