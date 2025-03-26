<script setup lang="ts">
import type { Kvantum } from '~/assets/typescript/types'
import type { CarouselApi } from '~/components/shadcn/carousel'

withDefaults(defineProps<{
    kvantums: Kvantum[]
}>(), {
    kvantums: () => [],
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
        #="{ canScrollNext, canScrollPrev }"
        @init-api="setApi"
    >
        <ShCarouselContent class="py-0.5">
            <slot name="before-slides"></slot>

            <ShCarouselItem
                class="basis-full desktop:basis-1/3"
                v-for="kvantum in kvantums"
            >
                <KvantumCard :kvantum="kvantum" class="h-full" />
            </ShCarouselItem>

            <slot name="after-slides"></slot>
        </ShCarouselContent>

        <div class="grid desktop:grid-cols-3 mt-6 gap-y-2">
            <KvantumsCarouselMenu
                class="desktop:col-start-2 "
                :can-scroll-prev
                :can-scroll-next
                :progress
            />
        </div>
    </ShCarousel>
</template>
