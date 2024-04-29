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
        :visibleSlidesCount="3"
    >
        <KSwiperSlide
            v-for="kvantum, index in kvantums"
            :key="index"
            style="align-self: stretch;"
        >
            <KvantumCard
                style="height: 100%;"
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
                <KIconButton
                    @click="slideToPreviousView"
                    :is-disabled="isFirstView"
                    icon-name="ph:arrow-left"
                />
                <KIconButton
                    @click="slideToNextView"
                    :is-disabled="isLastView"
                    icon-name="ph:arrow-right"
                />
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
