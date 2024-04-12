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
</script>

<template>
    <KContainer :class="$style.container">
        <KSection heading="Квантумы">
            <div :class="$style.kvantums">
                <TheKvantumsSectionInfoCard :class="$style.info" />

                <KSwiper
                    v-if="data"
                    :items="data"
                    :visibleSlidesCount="4"
                    :class="$style.swiper"
                >
                    <template #slide="{ item }">
                        <TheKvantumsSectionKvantumCard :kvantum="item" />
                    </template>

                    <template #navigation="{
                        currentSlide,
                        slideToNextSlide,
                        slideToPreviousSlide,
                        slidesCount,
                    }">
                        <div :class="$style.navigation">
                            <KProgress
                                :value="currentSlide"
                                :max="slidesCount - 4"
                                :class="$style.progress"
                            />

                            <div :class="$style.buttons">
                                <button :class="$style['pagination-button']"
                                    @click="slideToPreviousSlide"
                                >
                                    <Icon name="ph:arrow-left" />
                                </button>
                                <button :class="$style['pagination-button']"
                                    @click="slideToNextSlide"
                                >
                                    <Icon name="ph:arrow-right" />
                                </button>
                            </div>
                        </div>
                    </template>
                </KSwiper>
            </div>
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
    width: calc(20% - 0.5rem + 0.5rem / 5);
}
.swiper {
    width: calc(4 * 20% - 0.5rem + 0.5rem / 5);
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
    width: calc(20% - 0.5rem + 0.5rem / 5);
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
