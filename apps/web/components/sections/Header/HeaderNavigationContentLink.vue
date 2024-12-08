<script setup lang="ts">
import { Primitive, type PrimitiveProps } from 'radix-vue'

withDefaults(defineProps<{
    to?: string
    as?: PrimitiveProps['as']
}>(), {
    as: 'li'
})
</script>

<template>
    <Primitive :as="as" class="w-full h-full hover:pl-2 transition-all hover:bg-opacity-90 rounded-lg">
        <NuxtLink
            class="
                px-2 py-1
                inline-flex items-center w-full h-full justify-center gap-1
            "
            :to="to"
        >
            <slot></slot>
        </NuxtLink>
    </Primitive>
</template>
