<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { Button } from '@/components/shadcn/button'
import { cn } from '@/assets/typescript/shadcn/utils'
import { PanelLeft } from 'lucide-vue-next'
import { useSidebar } from './utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()

const { toggleSidebar } = useSidebar()
</script>

<template>
    <Button
        data-sidebar="trigger"
        variant="ghost"
        size="small"
        :class="cn('h-7 w-7', props.class)"
        @click="toggleSidebar"
    >
        <slot>
            <PanelLeft />
        </slot>
        <span class="sr-only">Toggle Sidebar</span>
    </Button>
</template>
