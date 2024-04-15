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
        <KSection heading="Новости">
            <KGrid
                v-if="data"
                :class="$style.grid"
                is="ul"
            >
                <KGridCell is="li" v-for="news in data" :key="news._id">
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
                <KGridCell :class="$style['grid-button-cell']">
                    <KLinkButton
                        to="/news"
                        variant="primary"
                        :class="$style.button"
                    >
                        Все новости
                    </KLinkButton>
                </KGridCell>
            </KGrid>
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
.grid {
    --columns: 1;
}
@media screen and (min-width: 768px) {
    .grid {
        --columns: 3;
    }
    .grid-button-cell {
        --start-column: 3;
    }
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
.link-item {
    grid-column: 3;
}
.button {
    width: 100%;
}
</style>
