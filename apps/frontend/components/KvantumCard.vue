<script setup lang="ts">
import { Kvantum } from '@types'

defineProps<{
    kvantum: Kvantum
}>()
</script>

<template>
    <article>
        <img
            class="w-full mb-[4px]"
            :src="kvantum.icon" alt="">

        <a
            class="text-[30px] font-bold mx-auto block text-center"
            :href="`/kvantums#${kvantum.id}`"
        >
            {{ kvantum.name }}

            <Icon name="mdi:chevron-down" class="text-[30px]" />
        </a>
        </article>
</template>
