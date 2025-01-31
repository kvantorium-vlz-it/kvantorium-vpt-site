<script setup lang="ts">
import { newsFragmentFactory } from '@kvantoriumvlz/query';
import { DOCUMENT_TYPES } from '@kvantoriumvlz/shared';
import { q } from '~/assets/typescript/groqd.client';
import type { News } from '~/assets/typescript/types';

const newsQuery = q
    .star
    .filterByType(DOCUMENT_TYPES.NEWS)
    .project(newsFragmentFactory(q))
    .order('publishDate desc')

const { data: news } = await useSanityQuery<News[]>(newsQuery.query)
</script>

<template>
    <Section>
        <SectionContainer>
            <SectionHeading>
                Новости
            </SectionHeading>

            <ul class="grid grid-cols-3 gap-2">
                <li v-for="singleNews in news">
                    <NewsCard :news="singleNews" />
                </li>
            </ul>
        </SectionContainer>
    </Section>
</template>
