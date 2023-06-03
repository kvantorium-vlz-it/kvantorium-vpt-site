<script setup lang="ts">
defineProps<{
    to?: string
}>()
</script>

<template>
    <NuxtLink
        :href="to"
        class="flex w-fit gap-2 text-[24px] font-medium px-6 py-3 bg-[#DEE2FF] text-[#313340] rounded-[10px] shadow-lg"
    >
        <slot></slot>
    </NuxtLink>
</template>
