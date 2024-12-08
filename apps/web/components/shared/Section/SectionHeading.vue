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
        :class="cn([
            `font-display antialiased
            text-2xl lg:text-6xl
            uppercase text-center leading-[0.75] tracking-tight
            mb-4 lg:mb-12`,
            $style.heading,
        ])"
    >
        <slot></slot>
    </Primitive>
</template>

<style module>
.heading {
    -webkit-text-stroke-width: 0.03em;
}
</style>
