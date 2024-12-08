<script setup lang="ts">
import { computed, ref } from 'vue';
import { cn } from '@/lib/utils';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from '@/components/shadcn/carousel'
import { watchOnce } from '@vueuse/core';
import Progress from '@/components/shadcn/progress/Progress.vue';

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
    <Section>
        <SectionContainer>
            <SectionHeading>
                Квантумы
            </SectionHeading>

            <Carousel v-slot="{ canScrollNext, canScrollPrev }" @init-api="setApi">
                <CarouselContent>
                    <CarouselItem class="basis-full lg:basis-1/3" v-for="i in 10">
                        <KvantumCard
                            :from-age="12"
                            kvantum-image="https://cdn.sanity.io/images/89inj6dr/production/fe29435a48259d377b7520bc2f0c5598f00cde59-265x265.png"
                            :kvantum-name="`Lorem ipsum dolor sit amet consectetur.`"
                            to="/"
                            :topics="[
                                'Веб-разработка',
                                'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
                                'Гейм-дев',
                            ]"
                        />
                    </CarouselItem>
                </CarouselContent>

                <div class="relative grid grid-cols-3 mt-6 gap-y-2">
                    <Progress :model-value="progress * 100" class="h-1 row-start-1 col-start-2" />

                    <div class="row-start-2 col-start-2 w-fit mx-auto inline-flex gap-2">
                        <CarouselPrevious
                            :disabled="!canScrollPrev"
                            :class="cn(
                                `top-auto right-auto bottom-auto left-auto translate-x-0 translate-y-0 relative`,
                            )"
                        />
                        <CarouselNext
                            :disabled="!canScrollNext"
                            class="top-auto right-auto bottom-auto left-auto translate-x-0 translate-y-0 relative"
                        />
                    </div>
                </div>
            </Carousel>
        </SectionContainer>
    </Section>
</template>
