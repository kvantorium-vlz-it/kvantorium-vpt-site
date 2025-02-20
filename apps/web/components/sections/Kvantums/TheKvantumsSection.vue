<script setup lang="ts">
import type { Kvantum } from '~/assets/typescript/types'
import { TrendingUpIcon } from 'lucide-vue-next'
import { q } from '~/assets/typescript/groqd.client'
import { DOCUMENT_TYPES } from '@kvantoriumvlz/shared'
import { kvantumFragmentFactory } from '@kvantoriumvlz/query'

const { query } = q
    .star
    .filterByType(DOCUMENT_TYPES.KVANTUM)
    .project(kvantumFragmentFactory(q))

const { data: kvantums } = useSanityQuery<Kvantum[]>(query)
</script>

<template>
    <Section>
        <SectionContainer>
            <SectionHeading>
                Квантумы
            </SectionHeading>

            <KvantumsCarousel
                v-if="kvantums"
                :kvantums="kvantums"
            >
                <template #before-slides>
                    <ShCarouselItem class="basis-full desktop:basis-1/3">
                        <ShCard class="flex flex-col justify-end items-end from-primary to-secondary bg-gradient-to-br text-white h-full">
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
