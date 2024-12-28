<script setup lang="ts">
import type { KvantumQueryResult } from '@kvantoriumvlz/shared/queries';
import type { Kvantum } from '~/assets/typescript/types'
import type { CarouselApi } from '~/components/shadcn/carousel'

withDefaults(defineProps<{
    kvantums: KvantumQueryResult[]
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
        <ShCarouselContent>
            <slot name="before-slides"></slot>

            <ShCarouselItem
                class="basis-full lg:basis-1/3"
                v-for="kvantum in kvantums"
            >
                <KvantumCard :kvantum="kvantum" />
            </ShCarouselItem>

            <slot name="after-slides"></slot>
        </ShCarouselContent>

        <div class="grid lg:grid-cols-3 mt-6 gap-y-2">
            <KvantumsCarouselMenu
                :can-scroll-prev
                :can-scroll-next
                :progress
            />
        </div>
    </ShCarousel>
</template>
