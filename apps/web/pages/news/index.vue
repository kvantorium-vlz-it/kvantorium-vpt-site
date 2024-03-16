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
    <KContainer
        :class="$style.page"
    >
        <ul :class="$style.list">
            <li
                v-for="news in data"
                :key="news._id"
            >
                <NuxtLink :to="`/news/${news.slug}`">
                    <NewsCard
                        :news="{
                            previewImage: news.previewImage,
                            publishDate: new Date(news.publishDate),
                            tags: news.tags,
                            title: news.heading
                        }"
                    />
                </NuxtLink>
            </li>
        </ul>
    </KContainer>
</template>

<style module>
.page {
    padding-top: 5rem;
}
.list {
    list-style: none;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0.5rem;
}
</style>
