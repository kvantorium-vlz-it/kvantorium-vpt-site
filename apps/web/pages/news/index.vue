<script setup lang="ts">
const { data } = useSanityQuery<{
    slug: string
    previewImage: string
    tags: string[]
    heading: string
    _id: string
    publishDate: string
}[]>(groq`
    *[_type == 'news'] {
        'slug': slug.current,
        'previewImage': previewImage.asset->url,
        'tags': tags[]->{ name }.name,
        heading,
        _id,
        publishDate,
    }
`)
</script>

<template>
    <KContainer>
        <KSection heading="Все новости">
            <KGrid
                v-if="data"
                :columns="3"
            >
                <KGridCell v-for="news in data">
                    <NuxtLink :to="`/news/${news.slug}`">
                        <NewsCard
                            :news="{
                                previewImage: news.previewImage,
                                publishDate: new Date(news.publishDate),
                                tags: news.tags,
                                title: news.heading,
                            }"
                        />
                    </NuxtLink>
                </KGridCell>
            </KGrid>
        </KSection>
    </KContainer>
</template>
