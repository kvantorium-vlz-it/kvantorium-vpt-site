<script setup lang="ts">
import type { PortableTextComponentProps } from '@portabletext/vue'

const props = defineProps<PortableTextComponentProps<{
    style: string // TODO: Modify to allowed headings
}>>()

defineOptions({
    inheritAttrs: false,
})

const fontSizeMapping = {
    'h1': 'text-6xl',
    'h2': 'text-5xl',
    'h3': 'text-4xl',
    'h4': 'text-3xl',
    'h5': 'text-2xl',
    'h6': 'text-1xl',
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
            'font-display uppercase leading-none font-bold tracking-tight antialiased text-',
            fontSize
        ]"
    >
        <slot></slot>
    </component>
</template>
