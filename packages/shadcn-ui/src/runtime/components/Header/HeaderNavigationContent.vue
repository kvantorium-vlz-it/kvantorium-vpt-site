<script setup lang="ts">
import { Primitive, type PrimitiveProps } from 'radix-vue'

const props = withDefaults(defineProps<PrimitiveProps>(), {
    as: 'div'
})
</script>

<template>
    <ShNavigationMenuContent>
        <Primitive
            v-bind="{...props, ...$attrs}"
            class="gap-x-4 gap-y-4 p-6"
        >
            <slot></slot>
        </Primitive>
    </ShNavigationMenuContent>
</template>
