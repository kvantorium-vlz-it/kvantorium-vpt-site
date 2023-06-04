<script setup lang="ts">
defineProps<{
    title: string
    label: string
    href: string
}>()
</script>

<template>
    <address>
        <NuxtLink :to="href" class="text-[26px] text-black not-italic">
            <span class="font-medium">
                {{ title }}
            </span>
            <br>
            <span>
                {{ label }}
            </span>
        </NuxtLink>
    </address>
</template>
