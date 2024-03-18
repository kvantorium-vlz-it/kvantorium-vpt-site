<script setup lang="ts">
const { params: { slug } } = useRoute()

const { data } = useSanityQuery<{
    slug: string
    previewImage: string
    content: any[]
    tags: string[]
    heading: string
    images: { url: string }[]
    _id: string
    publishDate: string
}>(groq`
    *[_type == 'news' && slug.current == $slug][0] {
        'slug': slug.current,
        'previewImage': previewImage.asset->url,
        content[]{
            ...,
            _type == "imageBlock" => {
                ...,
                'image': image.asset->url,
            }
        },
        images[] {
            'url': asset->url
        },
        'tags': tags[]->{ name }.name,
        heading,
        _id,
        publishDate,
    }
`, {
    slug,
})

const date = computed(() => new Date(data.value!.publishDate))

const formattedDate = computed(() => {
    const formatter = new Intl.DateTimeFormat('ru-RU', {
        dateStyle: 'short',
    })

    return formatter.format(date.value)
})
</script>

<template>
    <KContainer :class="$style.page" v-if="data">
        <div :class="$style.news">
            <img
                :src="data?.previewImage"
                alt=""
                :class="$style.image"
            >

            <ul :class="$style.tags">
                <li v-for="tag in data.tags">
                    <KBadge :class="$style.tag">
                        #{{ tag }}
                    </KBadge>
                </li>
            </ul>

            <div :class="$style.info">
                <h1 :class="$style.heading">
                    {{ data?.heading }}
                </h1>

                <div>
                    {{ formattedDate }}
                </div>
            </div>


            <div
                :class="$style.content"
            >

                <hr style="margin-bottom: 1rem; background-color: var(--c-site-background-darker-2);">

                <NewsContentBlock
                    :blocks="data?.content"
                />

                <div>
                    <KSwiper :class="$style.swiper" :visible-slides-count="2" :items="data.images" >
                        <template #slide="{ item }">
                            <img
                                :src="item.url"
                                :class="$style['swiper-image']"
                            />
                        </template>
                    </KSwiper>
                </div>
            </div>
        </div>
    </KContainer>
</template>

<style module>
.swiper-image {
    display: block;
    aspect-ratio: 1;
    object-fit: contain;
    width: 100%;
}
.page {
    padding-top: 6rem;
}
.info {
    display: flex;
    justify-content: space-between;
    max-width: 50rem;
    margin-inline: auto;
    align-items: center;
}
.tags {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    max-width: 50rem;
    margin-inline: auto;
    gap: 0.5rem;
    margin-bottom: 0.5rem;
}
.tag {
    --text-color: var(--c-site-primary);
    --border-color: var(--c-site-primary);
}
.news {
    max-width: 60rem;
    margin-inline: auto;
    border: 2px solid var(--c-site-background-darker-2);
    border-radius: 1rem;
    padding-bottom: 2rem;
}
.heading {
    font-family: 'BankGothic';
    font-size: 3rem;
}
.content {
    margin-inline: auto;
    font-family: 'Circe';
    margin-top: 0.5rem;
    font-size: 1.25rem;
    max-width: 50rem;
}
.content p {
    text-indent: 3ch;
    margin-block: 0.25em;
    line-height: 1.6;
}
.content h1,
.content h2,
.content h3,
.content h4,
.content h5,
.content h6 {
    text-indent: 1ch;
    font-family: 'BankGothic';
    margin-top: 0.75em;
    margin-bottom: 0.75em;
}
.content ol,
.content ul {
    list-style-position: inside;
    padding-left: 3ch;
}
.content ol,
.content ul {
    margin-top: 0.5em;
    margin-bottom: 0.5em;
}
.content li::marker {
    margin-right: 0;
}
.image {
    display: block;
    width: 100%;
    aspect-ratio: 4;
    object-fit: cover;
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
    margin-bottom: 0.5rem;
}
.swiper ul {
    padding-inline: 0;
}
</style>
