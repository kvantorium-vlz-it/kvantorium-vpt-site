<script setup lang="ts">
defineProps<{
    icon: string
    title: string
    href: string
    label: string
}>()
</script>

<template>
    <div
        class="flex gap-[20px] items-center"
    >
        <Icon
            :name="icon"
            class="aspect-square text-black text-[100px]"
        />

        <address
            class="text-black not-italic text-[30px] font-medium"
        >
            {{ title }}

            <a :href="href">
                {{ label }}
            </a>
        </address>
    </div>
</template>
