<script setup lang="ts">
const { data } = useSanityQuery<{
    _id: string
    minAge: number
    name: string
    icon: string
    slug: string
    topics: string[]
}[]>(groq`
    *[_type == 'kvantum'] {
        _id,
        minAge,
        name,
        'icon': icon.asset->url,
        'slug': slug.current,
        topics,
    }
`)

const kvantums = computed(() => data.value?.map((kvantum) => ({
    id: kvantum._id,
    name: kvantum.name,
    imageURL: kvantum.icon,
    slug: kvantum.slug,
    age: kvantum.minAge,
    topicsList: kvantum.topics,
})) || [])
</script>

<template>
    <KContainer>
        <KSection heading="Наши направления">
                <ul :class="$style.list">
                    <li
                        v-for="kvantum in kvantums"
                        :key="kvantum.id"
                    >
                        <TheKvantumsSectionKvantumCard :kvantum="kvantum" />
                    </li>
                </ul>
        </KSection>
    </KContainer>
</template>

<style module>
.list {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 1fr;
    gap: 1rem;
    list-style: none;
}
</style>
