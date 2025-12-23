<script setup lang="ts">
import type { EventItem } from '~/assets/typescript/types';
import type { CarouselApi } from '../shadcn/carousel';
import { ArrowLeftIcon, ArrowRightIcon } from 'lucide-vue-next';

withDefaults(defineProps<{
    images: Array<EventItem['previewImage']>
}>(), {
    images: () => []
})

const api = ref<CarouselApi>()
const progress = ref(0)

function setApi(val: CarouselApi) {
    api.value = val
}

watchOnce(api, (api) => {
    if (!api) {
        return
    }

    progress.value = api.selectedScrollSnap() / (api.scrollSnapList().length - 1)

    api.on('select', () => {
        progress.value = api.selectedScrollSnap() / (api.scrollSnapList().length - 1)
    })
})
</script>

<template>
    <ShCarousel
        #="{ canScrollNext, canScrollPrev, scrollNext, scrollPrev }"
        @init-api="setApi"
    >
        <ShCarouselContent>
            <ShCarouselItem
                v-for="image in images"
                class="basis-full laptop:basis-1/2 desktop:basis-1/3"
            >
                <img
                    :src="image!.asset!.src!"
                    alt=""
                    class="aspect-square object-cover h-full"
                >
            </ShCarouselItem>
        </ShCarouselContent>

        <div class="mx-auto w-fit mt-4">
            <ShButton
                @click="scrollPrev"
                :disabled="!canScrollPrev"
            >
                <ArrowLeftIcon />
            </ShButton>
            <ShButton
                @click="scrollNext"
                :disabled="!canScrollNext"
            >
                <ArrowRightIcon />
            </ShButton>
        </div>
    </ShCarousel>
</template>
