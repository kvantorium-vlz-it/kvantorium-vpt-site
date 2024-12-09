<script setup lang="ts">
import type { Kvantum } from '~/assets/typescript/types'

withDefaults(defineProps<{
    kvantums: Kvantum[]
}>(), {
    kvantums: () => [],
})
</script>

<template>
    <Section>
        <SectionContainer>
            <SectionHeading>
                Квантумы
            </SectionHeading>

            <KvantumsCarousel :kvantums="kvantums">
                <template #before-slides>
                    <ShCarouselItem class="basis-full lg:basis-1/2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, pariatur.
                    </ShCarouselItem>
                </template>
            </KvantumsCarousel>
        </SectionContainer>
    </Section>
</template>
