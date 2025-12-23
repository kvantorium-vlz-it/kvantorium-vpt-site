<script setup lang="ts">
defineProps<{
    title: string
    value: string
}>()
</script>

<template>
    <ShAccordionItem
        :value="value"
        class="text-xl leading-heading [&_svg]:size-8"
    >
        <ShAccordionTrigger>
            {{ title }}
        </ShAccordionTrigger>
        <ShAccordionContent class="text-base">
            <slot></slot>
        </ShAccordionContent>
    </ShAccordionItem>
</template>
