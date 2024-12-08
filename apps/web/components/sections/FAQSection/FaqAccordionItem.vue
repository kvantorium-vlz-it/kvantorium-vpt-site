<script setup lang="ts">
import { ChevronDownIcon } from 'lucide-vue-next'
import { VisuallyHidden } from 'radix-vue';

defineProps<{
    title: string
    value: string
}>()
</script>

<template>
    <ShAccordionItem :value="value">
        <ShAccordionTrigger class="justify-end relative">
            <span class="absolute left-1/2 -translate-x-1/2">
                {{ title }}
            </span>
        </ShAccordionTrigger>

        <ShAccordionContent class="text-center">
            <slot></slot>
        </ShAccordionContent>
    </ShAccordionItem>
</template>
