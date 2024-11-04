<script setup lang="ts">
import { Primitive, type PrimitiveProps } from 'radix-vue'

const props = defineProps<PrimitiveProps>()
</script>

<template>
    <Primitive
        class="container"
        :="props"
    >
        <slot></slot>
    </Primitive>
</template>
