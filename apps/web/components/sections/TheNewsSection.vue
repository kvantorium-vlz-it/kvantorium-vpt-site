<script setup lang="ts">
const { data } = useSanityQuery<{
    slug: string
    previewImage: string
    content: any[]
    tags: string[]
    heading: string
    _id: string
    publishDate: string
}[]>(groq`
    *[_type == 'news'] | order(publishDate desc)[0...6] {
        'slug': slug.current,
        'previewImage': previewImage.asset->url,
        content[]{
            ...,
            _type == "imageBlock" => {
                ...,
                'image': image.asset->url,
            }
        },
        'tags': tags[]->{ name }.name,
        heading,
        _id,
        publishDate,
    }
`)
</script>

<template>
    <KContainer>
        <KSection heading="Новости">
            <ul :class="$style.list">
                <li v-for="news in data">
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
                </li>
                <KLinkButton
                    to="/news"
                    variant="primary"
                    style="grid-column: 3;"
                >
                    Все новости
                </KLinkButton>
            </ul>
        </KSection>
    </KContainer>
</template>

<style module>
.heading {
    font-size: 2.5rem;
    line-height: 1.3;
    font-family: 'BankGothic';
    text-align: center;
    margin-bottom: 2rem;
}
.list {
    padding: 0;
    margin: 0;
    list-style: none;

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    /* grid-auto-rows: 1fr; */
    gap: 0.25rem;
}
</style>
