<script setup lang="ts">
import { Primitive, type PrimitiveProps } from 'radix-vue'

withDefaults(defineProps<PrimitiveProps>(), {
    as: 'section'
})
</script>

<template>
    <Primitive
        class="py-8 my-4"
        :as="as"
        :as-child="asChild"
    >
        <slot></slot>
    </Primitive>
</template>
