<script setup lang="ts">
import { TrendingUpIcon } from 'lucide-vue-next'
import { DOCUMENT_TYPES } from '@kvantoriumvlz/shared'
import { kvantumProjection, q, type KvantumProjection } from '#shared/sanity';

const { query } = q
    .star
    .filterByType(DOCUMENT_TYPES.KVANTUM)
    .project(kvantumProjection)

const { data: kvantums } = useSanityQuery<KvantumProjection[]>(query)
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
                    <ShCarouselItem class="basis-full laptop:basis-1/2 desktop:basis-1/3">
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
