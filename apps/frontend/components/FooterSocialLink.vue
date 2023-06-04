<script setup lang="ts">
defineProps<{
    icon: string
    label: string
    href: string
}>()
</script>

<template>
    <NuxtLink
        :to="href"
        class="text-black text-[30px] flex items-center gap-1 font-bold"
    >
        <Icon :name="icon" class="text-[50px]" />
        {{ label }}
    </NuxtLink>
</template>
