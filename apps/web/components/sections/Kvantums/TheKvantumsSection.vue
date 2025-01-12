<script setup lang="ts">
import type { Kvantum } from '~/assets/typescript/types'
import { TrendingUpIcon } from 'lucide-vue-next'
import type { KvantumQueryResult } from '@kvantoriumvlz/shared/queries'

withDefaults(defineProps<{
    kvantums: KvantumQueryResult[]
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
                    <ShCarouselItem class="basis-full lg:basis-1/3">
                        <ShCard class="flex flex-col justify-end items-end from-blue-800 to-blue-600 bg-gradient-to-br text-white h-full">
                            <ShCardHeader>
                                <TrendingUpIcon :size="56" />
                            </ShCardHeader>
                            <ShCardContent class="text-lg">
                                Волжский кванториум предлагает множество различных направлений подготовки, которые помогут раскрыть способности ребенка
                            </ShCardContent>
                        </ShCard>
                    </ShCarouselItem>
                </template>
            </KvantumsCarousel>
        </SectionContainer>
    </Section>
</template>
