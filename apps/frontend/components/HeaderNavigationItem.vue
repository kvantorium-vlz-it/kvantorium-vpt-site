<script setup lang="ts">
import { HeaderNavigationItemProps } from '@/assets/typescript/types'

defineProps<HeaderNavigationItemProps>()

const isCurrent = computed(() => false)
</script>
<template>
    <NuxtLink
        class="text-black inline-block px-2 py-1 hover:bg-[#E6E7EE] rounded-[10px] text-[20px]"
        :class="{ 'bg-[#DEE3FF]': isCurrent }"
        :href="to"
    >
        {{ label }}
    </NuxtLink>
</template>
