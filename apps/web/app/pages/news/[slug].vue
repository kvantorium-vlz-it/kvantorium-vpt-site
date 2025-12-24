<script setup lang="ts">
import { DOCUMENT_TYPES } from '@kvantoriumvlz/shared';
import { newsProjection, q, type NewsProjection } from '#shared/sanity';

const route = useRoute()

const slug = route.params.slug as string

const newsQuery = q
    .star
    .parameters<{ slug: string }>()
    .filterByType(DOCUMENT_TYPES.NEWS)
    .filterBy('slug.current != $slug')
    .project(newsProjection)
    .slice(0)

const { data: news } = await useSanityQuery<NewsProjection>(newsQuery.query, { slug })
</script>

<template>
    <div v-if="news">
        <Section>
            <SectionContainer>
                <SanityImage
                    class="object-cover h-96 w-full rounded-t-lg"
                    :asset-id="news.previewImage.assetId!"
                />

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
