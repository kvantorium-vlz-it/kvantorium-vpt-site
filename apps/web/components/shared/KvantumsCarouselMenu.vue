<script setup lang="ts">
import { cn } from '@/lib/utils'

defineProps<{
    progress: number
    canScrollPrev: boolean
    canScrollNext: boolean
}>()
</script>

<template>
    <div class="lg:col-start-2">
        <ShProgress
            :model-value="progress * 100"
            class="h-1 mb-2"
        />

        <div class="w-fit flex gap-2 mx-auto">
            <ShCarouselPrevious
                :disabled="!canScrollPrev"
                :class="cn(
                    `top-auto right-auto bottom-auto left-auto translate-x-0 translate-y-0 relative`,
                )"
            />

            <ShCarouselNext
                :disabled="!canScrollNext"
                class="top-auto right-auto bottom-auto left-auto translate-x-0 translate-y-0 relative"
            />
        </div>
    </div>
</template>
