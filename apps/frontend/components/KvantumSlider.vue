<script setup lang="ts">
import { Kvantum } from '~/assets/typescript/types';

defineProps<{
    kvantums: Kvantum[]
}>()
</script>

<template>
    <Slider :slides="kvantums" class="relative">
        <template #leftThumb="{ previousSlide }">
            <button
                @click="previousSlide"
                class="absolute z-20 left-[15px] top-1/2 -translate-y-1/2"
            >
                <Icon
                    name="material-symbols:chevron-left"
                    class="text-white w-20 h-20"
                />
            </button>
        </template>
        <template #slide="{ slide: kvantum }">
            <KvantumSliderSlide :kvantum="kvantum" />
        </template>
        <template #rightThumb="{ nextSlide }">
            <button
                @click="nextSlide"
                class="absolute z-20 right-[15px] top-1/2 -translate-y-1/2"
            >
                <Icon
                    name="material-symbols:chevron-right"
                    class="text-white w-20 h-20"
                />
            </button>
        </template>
    </Slider>
</template>
