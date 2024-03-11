<script setup lang="ts">
const { params: { slug } } = useRoute()

const { data: kvantum } = useSanityQuery<{
    _id: string
    name: string
    topics: string[]
    minAge: number
    icon: string
    slug: string
}>(groq`
    *[_type == 'kvantum' && slug.current == $slug][0] {
        _id,
        name,
        topics,
        minAge,
        'icon': icon.asset->url,
        'slug': slug.current,
    }
`, {
    slug,
})
</script>

<template>
    <div :class="$style.page">
        <template v-if="kvantum">
            <img :src="kvantum.icon" alt="">

            <h1>
                {{ kvantum.name }}
            </h1>

            <p>
                Возрастная категория: {{ kvantum.minAge }}+
            </p>

            <ol :class="$style.topics">
                <li v-for="topic, index in kvantum.topics" :key="index">
                    {{ topic }}
                </li>
            </ol>
        </template>

        <h1 v-else>
            Квантум не найден
        </h1>
    </div>
</template>

<style module>
.page {
    margin-top: 6rem;
    padding-inline: var(--site-margin);
}
.topics {
    list-style-position: inside;
}
</style>
