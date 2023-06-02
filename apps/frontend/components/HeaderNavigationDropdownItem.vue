<script setup lang="ts">
import { HeaderNavigationDropdownItemProps } from '@/assets/typescript/types'

defineProps<HeaderNavigationDropdownItemProps>()
</script>

<template>
    <NuxtLink
        class="text-black hover:underline text-[20px]"
        :href="to"
    >
        {{ label }}
    </NuxtLink>
</template>
