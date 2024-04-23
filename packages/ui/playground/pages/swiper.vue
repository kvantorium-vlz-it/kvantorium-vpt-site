<script setup lang="ts">
const slides = ref(10)
const slidesPerView = ref(2)

const {
    currentView,
    viewsCount,
    viewSlides,
    slideToNextView,
    slideToPreviousView,
    slideToFirstView,
    slideToLastView,
    isFirstView,
    isLastView,
} = useSwiper({
    slidesCount: slides,
    slidesPerView: slidesPerView
})
</script>

<template>
    <div>
        <hr>
        Views: {{ viewsCount }}
        <br>
        Current view: {{ currentView }}
        <hr>

        <div :class="$style.grid">
            <div
                :class="$style.cell"
                v-for="i in slides"
                :style="{
                    background: viewSlides.includes(i - 1) ? 'red' : 'white'
                }"
            >
                {{ i - 1 }}
            </div>
        </div>

        <hr>

        <button @click="slideToPreviousView" :disabled="isFirstView">
            prev
        </button>
        <button @click="slideToNextView" :disabled="isLastView">
            next
        </button>

        <hr>

        <button @click="slides += 1">
            add slide
        </button>
        <button @click="slides -= 1">
            remove slide
        </button>
        <br>
        <button @click="slidesPerView += 1">
            add slide to view
        </button>
        <button @click="slidesPerView -= 1">
            remove slide from view
        </button>

        <hr>

        <button @click="slideToFirstView" >
            slide to first
        </button>
        <button @click="slideToLastView" >
            slide to last
        </button>

        <hr>

        Visible slides: {{ viewSlides }}

        <hr>

        <br>

        <div style="aspect-ratio: 1; border: 1px solid black; width: fit-content; block-size: fit-content;">
            +
        </div>

        <KSwiper :visible-slides-count="slidesPerView">
            <KSwiperSlide v-for="slide in slides">
                Slide {{ slide - 1 }}
            </KSwiperSlide>

            <template #navigation="{ slideToNextView, slideToPreviousView, isFirstView, isLastView }">
                <KCircleButton @click="slideToPreviousView" :is-disabled="isFirstView">
                    <Icon name="ph:arrow-left" />
                </KCircleButton>
                <KCircleButton @click="slideToNextView" :is-disabled="isLastView">
                    <Icon name="ph:arrow-right" />
                </KCircleButton>
            </template>
        </KSwiper>
    </div>
</template>

<style module>
.grid {
    display: grid;
    grid-template-columns: repeat(v-bind(slides), 1fr);
}
.cell {
    border: 1px solid black;
    aspect-ratio: 1;
}
</style>
