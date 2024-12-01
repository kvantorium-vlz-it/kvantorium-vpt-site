<script setup lang="ts">
import { Primitive, type PrimitiveProps } from 'radix-vue'
import { computed } from 'vue'

const props = withDefaults(defineProps<{
    fullWidth?: boolean
} & PrimitiveProps>(), {
    fullWidth: false
})

const primitiveProps = computed(() => {
    const { fullWidth, ...primitiveProps } = props

    return primitiveProps
})
</script>

<template>
    <Primitive
        :class="[
            'container',
            { ['max-w-max']: fullWidth }
        ]"
        :="primitiveProps"
    >
        <slot></slot>
    </Primitive>
</template>
