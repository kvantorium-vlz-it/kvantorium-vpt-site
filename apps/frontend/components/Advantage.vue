<script setup lang="ts">
defineProps<{
    icon: string
    heading: string
    description: string
}>()
</script>

<template>
    <article
        class="clear-both"
        :title="heading"
    >
        <img
            class="w-48 float-left mr-4 mb-4"
            :src="icon"
            :alt="heading"
        >

        <h3 class="mb-4 text-[24px] font-medium">
            {{ heading }}
        </h3>

        <div class="text-[22px]">
            {{ description }}
        </div>
    </article>
</template>
