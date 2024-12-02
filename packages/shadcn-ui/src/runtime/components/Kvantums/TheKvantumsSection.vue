<script setup lang="ts">
import { computed, ref } from 'vue';
import { cn } from '../../lib/utils';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from '../../shadcn/ui/carousel'
import { watchOnce } from '@vueuse/core';

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
            </Carousel>
        </SectionContainer>
    </Section>
</template>
