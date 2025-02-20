<script setup lang="ts">
import { newsFragmentFactory } from '@kvantoriumvlz/query'
import { DOCUMENT_TYPES } from '@kvantoriumvlz/shared'
import { ArrowUpRightIcon } from 'lucide-vue-next'
import { q } from '~/assets/typescript/groqd.client'
import type { News } from '~/assets/typescript/types'

const { query } = q
    .star
    .filterByType(DOCUMENT_TYPES.NEWS)
    .project(newsFragmentFactory(q))
    .slice(0, 6)

const { data: news } = useSanityQuery<News[]>(query)
</script>

<template>
    <Section>
        <SectionContainer>
            <SectionHeading>
                Новости
            </SectionHeading>

            <ul class="grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 gap-x-4 gap-y-3 mb-6">
                <li v-for="newsItem in news">
                    <NewsCard :news="newsItem"/>
                </li>
            </ul>

            <ShButton class="w-full" as-child>
                <NuxtLink to="/news/">
                    <span>Ко всем новостям</span>

                    <ArrowUpRightIcon />
                </NuxtLink>
            </ShButton>
        </SectionContainer>
    </Section>
</template>
