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
                <KGrid :class="$style.grid">
                    <KGridCell
                        v-for="kvantum, index in data"
                        :key="index"
                    >
                        <TheKvantumsSectionKvantumCard :kvantum="kvantum" />
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
