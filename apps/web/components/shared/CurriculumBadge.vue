<script setup lang="ts">
import { ArrowUpRightIcon } from 'lucide-vue-next'

defineProps<{
    curriculum: string
}>()
</script>

<template>
    <ShBadge
        variant="outline"
        class="font-body text-white font-normal text-base py-0 gap-2"
    >
        <span>
            {{ curriculum }}
        </span>

        <ArrowUpRightIcon
            :size="16"
        />
    </ShBadge>
</template>
