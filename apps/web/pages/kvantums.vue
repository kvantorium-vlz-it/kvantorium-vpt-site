<script setup lang="ts">
const { data } = useSanityQuery<{
    name: string
    icon: string
    slug: string
    topics: string[]
    minAge: number
}[]>(groq`
    *[_type == 'kvantum'] {
        name,
        'icon': icon.image.asset->url,
        'slug': slug.current,
        topics,
        'minAge': math::max([
            math::min(
                *[_type == 'curriculum' && references(^._id)].age.from
            ),
        12
    ])
}`)
</script>

<template>
    <KContainer>
        <KSection heading="Наши направления">
                <ul :class="$style.list">
                    <li
                        v-for="kvantum, index in data"
                        :key="index"
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
