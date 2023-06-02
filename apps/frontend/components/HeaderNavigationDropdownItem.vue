<script setup lang="ts">
const {} = defineProps<{
    label: string
    to?: string
}>()
</script>

<template>
    <NuxtLink
        class="text-black hover:underline text-[20px]"
        :href="to"
    >
        {{ label }}
    </NuxtLink>
</template>
