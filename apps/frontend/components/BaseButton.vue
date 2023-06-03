<script setup lang="ts">
withDefaults(defineProps<{
    to?: string
    variant?: 'blue' | 'yellow'
}>(), {
    variant: 'blue'
})
</script>

<template>
    <NuxtLink
        :href="to"
        class="flex w-fit gap-2 text-[24px] font-medium px-6 py-3 text-[#313340] rounded-[10px] shadow-lg items-center"
        :class="`${variant === 'yellow' ? 'bg-[#FFD685]' : 'bg-[#DEE2FF]'}`"
    >
        <slot></slot>
    </NuxtLink>
</template>
