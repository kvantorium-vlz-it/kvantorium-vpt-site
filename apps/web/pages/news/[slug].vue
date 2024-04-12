<script setup lang="ts">
const { params: { slug } } = useRoute()

const { data } = useSanityQuery<{
    _id: string
    slug: string
    gallery: string[]
    tags: string[]
    date: string
    title: string
    content: any[]
    previewImage: string
}>(groq`
    *[_type == 'news' && slug.current == $slug][0] {
        _id,
        'gallery': gallery[].image.asset->url,
        'slug': slug.current,
        tags,
        date,
        title,
        'content': content[]{
            ...,
            _type == "imageAsset" => {
                ...,
                'image': image.asset->url,
            }
        },
        'tags': tags[]->name,
        'previewImage': previewImage.image.asset->url,
    }
`, {
    slug,
})

console.log(data.value);


const date = computed(() => new Date(data.value!.date))

const formattedDate = computed(() => {
    const formatter = new Intl.DateTimeFormat('ru-RU', {
        dateStyle: 'short',
    })

    return formatter.format(date.value)
})
</script>

<template>
    <KContainer :class="$style.page" v-if="data">
        <KSection>
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
                        {{ data?.title }}
                    </h1>

                    <div>
                        {{ formattedDate }}
                    </div>
                </div>


                <div
                    :class="$style.content"
                >

                    <hr style="margin-bottom: 1rem; background-color: var(--c-site-background-darker-2);">

                    <BlockContent :blocks="data.content" />

                    <div>
                        <KSwiper :class="$style.swiper" :visible-slides-count="2" :items="data.gallery" >
                            <template #slide="{ item }">
                                <img
                                    :src="item"
                                    :class="$style['swiper-image']"
                                />
                            </template>
                        </KSwiper>
                    </div>
                </div>
            </div>
        </KSection>
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
    margin-top: 0.5rem;
    max-width: 50rem;
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
