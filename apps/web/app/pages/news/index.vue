<script setup lang="ts">
import { DOCUMENT_TYPES } from '@kvantoriumvlz/shared'
import { newsProjection, q, type NewsProjection } from '#shared';

const newsQuery = q
    .star
    .filterByType(DOCUMENT_TYPES.NEWS)
    .project(newsProjection)
    .order('publishDate desc')
    .slice(0)

const { data: news } = await useSanityQuery<Array<NewsProjection>>(newsQuery.query)
</script>

<template>
    <Section>
        <SectionContainer>
            <SectionHeading>
                Новости
            </SectionHeading>

            <ul class="grid grid-cols-1 laptop:grid-cols-2 desktop:grid-cols-3 gap-2">
                <li v-for="singleNews in news">
                    <NewsCard :news="singleNews" class="h-full" />
                </li>
            </ul>
        </SectionContainer>
    </Section>
</template>
