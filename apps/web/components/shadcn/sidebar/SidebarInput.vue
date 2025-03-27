<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { Input } from '@/components/shadcn/input'
import { cn } from '@/assets/typescript/shadcn/utils'

const props = defineProps<{
    class?: HTMLAttributes['class']
}>()
</script>

<template>
    <Input
        data-sidebar="input"
        :class="cn(
            'h-8 w-full bg-background shadow-none focus-visible:ring-2 focus-visible:ring-sidebar-ring',
            props.class,
        )"
    >
        <slot />
    </Input>
</template>
