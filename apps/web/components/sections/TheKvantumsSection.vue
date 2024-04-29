<script setup lang="ts">
// Delete before production
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
    }
`)

const {
    desktop,
    tablet,
} = useCssBreakpoints()

const visibleViews = computed(() => {
    if (desktop.value) {
        return 3
    }

    if (tablet.value) {
        return 2
    }

    return 1
})
</script>

<template>
    <KContainer :class="$style.container">
        <KSection heading="Квантумы">
            <KGrid :columns="visibleViews + 1">
                <KGridCell>
                    <TheKvantumsSectionInfoCard />
                </KGridCell>

                <KGridCell :width="visibleViews">
                    <KvantumsSwiper
                        :kvantums="data || []"
                        :visible-views="visibleViews"
                    />
                </KGridCell>
            </KGrid>
        </KSection>
    </KContainer>
</template>

<style module>
.section {
    padding-bottom: 5.25rem;
    position: relative;
}
.heading {
    font-family: 'BankGothic';
    font-size: 2.5rem;
    text-align: center;
    margin-bottom: 2rem;
}
.kvantums {
    display: flex;
    gap: 0.5rem;
    position: relative;
    align-items: stretch;
    padding-bottom: 5rem;
}
.info {
    width: calc(50% - 0.5rem + 0.5rem);
}
.swiper {
    --slides: 1;
    width: calc(1 * 50% - 0.5rem + 0.5rem);
}
.paragraph {
    max-width: 40rem;
    margin-block-end: 1rem;
    margin-inline: auto;
    text-align: center
}
@media screen and (min-width: 768px) {
    .info {
        width: calc(25% - 0.5rem + 0.5rem / 4);
    }
    .swiper {
        width: calc(3 * 25% - 0.5rem + 0.5rem / 4);
        --slides: 3;
    }
}
.pagination-button {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border: none;
    padding: 0;
    margin: 0;
    background-color: transparent;
    outline: 2px solid var(--c-site-primary);
    border-radius: 100vw;
    aspect-ratio: 1;
    padding: 0.5rem;
    color: var(--c-site-primary);
    cursor: pointer;
}
.progress {
    width: calc(25% - 0.5rem + 0.5rem / 4);
    margin-bottom: 0.5rem;
}
.navigation {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.buttons {
    display: flex;
    gap: 1rem;
}
</style>
