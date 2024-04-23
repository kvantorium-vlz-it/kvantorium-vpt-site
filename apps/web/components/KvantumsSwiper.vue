<script setup lang="ts">
interface Props {
    kvantums: {
        name: string
        icon: string
        slug: string
        topics: string[]
        minAge: number
    }[]
}

defineProps<Props>()
</script>

<template>
    <KSwiper
        :visibleSlidesCount="4"
    >
        <KSwiperSlide
            v-for="kvantum, index in kvantums"
            :key="index"
        >
            <TheKvantumsSectionKvantumCard
                :kvantum="kvantum"
            />
        </KSwiperSlide>

        <template
            #navigation="{
                isFirstView,
                isLastView,
                slideToNextView,
                slideToPreviousView,
                viewsCount,
                currentView,
            }"
        >
            <KProgress
                :max="viewsCount"
                :value="currentView"
                :class="$style.progress"
            />

            <div :class="$style.buttons">
                <KCircleButton
                    @click="slideToPreviousView"
                    :is-disabled="isFirstView"
                >
                    <Icon name="ph:arrow-left" />
                </KCircleButton>
                <KCircleButton
                    @click="slideToNextView"
                    :is-disabled="isLastView"
                >
                    <Icon name="ph:arrow-right" />
                </KCircleButton>
            </div>
        </template>
    </KSwiper>
</template>

<style module>
.buttons {
    display: flex;
    justify-content: center;
    gap: 0.5rem;
    margin-top: 0.5rem;
}
.progress {
    max-width: calc(100% / var(--slides-per-view));
    margin-inline: auto;
    margin-top: 0.5rem;
}
</style>
