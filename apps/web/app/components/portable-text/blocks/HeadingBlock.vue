<script setup lang="ts">
import type { PortableTextComponentProps } from '@portabletext/vue'

const props = defineProps<PortableTextComponentProps<{
    style: string // TODO: Modify to allowed headings
}>>()

defineOptions({
    inheritAttrs: false,
})

const fontSizeMapping = {
    'h1': 'text-5xl',
    'h2': 'text-4xl',
    'h3': 'text-3xl',
    'h4': 'text-2xl',
    'h5': 'text-1xl',
    'h6': 'text-lg',
}

const fontSize = computed(() => (
    fontSizeMapping[props.value.style as keyof typeof fontSizeMapping]
    || 'text-base'
))
</script>

<template>
    <component
        :is="value.style"
        :class="[
            'font-serif leading-heading uppercase font-bold -tracking-tight antialiased',
            fontSize
        ]"
    >
        <slot></slot>
    </component>
</template>
