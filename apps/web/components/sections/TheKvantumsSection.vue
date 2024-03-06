<script setup lang="ts">
// Delete before production
const kvantums = ref(Array.from({ length: 8 }).map((_, i) => ({
        age: 12,
        imageURL: '',
        name: `Kvantum`,
        slug: 'slug',
        topicsList: [
            'Item 1',
            'Item 2',
            'Item 3',
        ]
})))
</script>

<template>
    <section :class="$style.section">
        <div :class="$style.container">
            <TheKvantumsSectionInfoCard :class="$style.info" />

            <BaseSwiper
                :class="$style.swiper"
                :items="kvantums"
                :slidesCount="4"
            >
                <template #default="{ item }">
                    <TheKvantumsSectionKvantumCard :kvantum="item" />
                </template>

                <template
                    #pagination="{
                        slideToNextSlide,
                        slideToPreviousSlide,
                        currentSlide,
                        slidesCount,
                        visibleSlidesCount,
                    }"
                >
                    <div :class="$style.menu">
                        <div
                            :style="`
                                --left: ${currentSlide / slidesCount * 100}%;
                                --width: ${visibleSlidesCount / slidesCount * 100}%;
                            `"
                            :class="$style['progress-bar']"
                        ></div>

                        <div :class="$style.pagination">
                            <button
                                :class="$style['pagination-button']"
                                @click="slideToPreviousSlide"
                            >
                                <Icon name="ph:arrow-left" />
                            </button>
                            <button
                                :class="$style['pagination-button']"
                                @click="slideToNextSlide"
                            >
                                <Icon name="ph:arrow-right" />
                            </button>
                        </div>
                    </div>
                </template>
            </BaseSwiper>
        </div>
    </section>
</template>

<style module>
.section {
    padding-bottom: 5rem;
}
.container {
    padding-inline: var(--site-margin);
    display: flex;
    gap: 0.5rem;
    position: relative;
}
.info {
    flex: 1 0 0;
    width: 20%;
}
.swiper {
    flex: 4 0 0;
    width: 80%;
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
.pagination {
    display: flex;
    gap: 0.75rem;
    justify-content: center;
    position: absolute;
    left: 50%;
    translate: -50%;
    bottom: -5rem;
}
.progress-bar {
    --left: 0;
    --width: 0;
    bottom: -2rem;
    position: absolute;
    width: calc(20% - 0.5rem);
    left: 50%;
    translate: -50%;
    height: 0.125rem;
    background-color: var(--c-site-background-darker-2);
}
.progress-bar::after {
    position: absolute;
    top: 100%;
    content: '';
    left: var(--left);
    width: var(--width);
    height: 0.125rem;
    background-color: var(--c-site-primary);
}
</style>
