<script setup lang="ts">
defineProps<{
    images: string[]
}>()
</script>

<template>
    <Slider :slides="images" class="relative z-0">
        <template #leftThumb="{ previousSlide }">
            <button
                @click="previousSlide"
                class="absolute z-20 left-[10%] top-1/2 -translate-y-1/2"
            >
                <Icon
                    name="material-symbols:chevron-left"
                    class="text-white w-20 h-20"
                />
            </button>
        </template>
        <template #slide="{ slide: image }">
            <img :src="image" class="block w-4/5 mx-auto rounded-[30px] aspect-[1.5] object-cover">
        </template>
        <template #rightThumb="{ nextSlide }">
            <button
                @click="nextSlide"
                class="absolute z-20 right-[10%] top-1/2 -translate-y-1/2"
            >
                <Icon
                    name="material-symbols:chevron-right"
                    class="text-white w-20 h-20"
                />
            </button>
        </template>
    </Slider>
</template>
