<script setup lang="ts">
import { newsFragmentFactory } from '@kvantoriumvlz/query';
import { DOCUMENT_TYPES } from '@kvantoriumvlz/shared';
import { q } from '~/assets/typescript/groqd.client';
import type { News } from '~/assets/typescript/types';

const route = useRoute()

const slug = route.params.slug as string

const newsQuery = q
    .star
    .filterByType(DOCUMENT_TYPES.NEWS)
    .filter(`slug.current == "${slug}"`)
    .project(newsFragmentFactory(q))
    .slice(0)

const { data: news } = await useSanityQuery<News>(newsQuery.query)
</script>

<template>
    <div v-if="news">
        <Section>
            <SectionContainer>
                <img
                    class="object-cover h-96 w-full rounded-t-lg"
                    :src="news.previewImage.asset.src!"
                    :alt="news.previewImage.asset.alt ?? undefined"
                >

                <SectionHeading>
                    {{ news.title }}
                </SectionHeading>

                <div class="max-w-[80ch] mx-auto">
                    <div>
                        <ul class="flex gap-2 flex-wrap mb-4">
                            <li v-for="tag in news.tags">
                                <ShBadge>
                                    {{ tag.name }}
                                </ShBadge>
                            </li>
                        </ul>
                    </div>
                    <PortableBlocks :blocks="news.content" />
                </div>
            </SectionContainer>
        </Section>
    </div>
</template>
