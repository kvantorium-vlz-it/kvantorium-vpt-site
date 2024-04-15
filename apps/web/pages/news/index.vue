<script setup lang="ts">
const { data } = useSanityQuery<{
    _id: string
    slug: string
    gallery: string[]
    tags: string[]
    date: string
    title: string
    content: any[]
    previewImage: string
}[]>(groq`
    *[_type == 'news'][0..5] {
        _id,
        'gallery': gallery[].image.asset->url,
        'slug': slug.current,
        tags,
        date,
        title,
        'content': content[]{
            ...,
            _type == "imageBlock" => {
                ...,
                'image': image.asset->url,
            }
        },
        'tags': tags[]->name,
        'previewImage': previewImage.image.asset->url,
    }
`)
</script>

<template>
    <KContainer>
        <KSection heading="Все новости">
            <KGrid
                v-if="data"
                :class="$style.grid"
            >
                <KGridCell v-for="news in data">
                    <NuxtLink :to="`/news/${news.slug}`">
                        <NewsCard
                            :news="{
                                previewImage: news.previewImage,
                                publishDate: new Date(news.date),
                                tags: news.tags,
                                title: news.title,
                            }"
                        />
                    </NuxtLink>
                </KGridCell>
            </KGrid>
        </KSection>
    </KContainer>
</template>

<style module>
.grid {
    --columns: 1;
}
@media screen and (min-width: 768px) {
    .grid {
        --columns: 3;
    }
}
</style>
