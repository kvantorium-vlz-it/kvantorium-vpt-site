<script setup lang="ts" generic="T">
import { onMounted, onUnmounted, ref, useIntersectionObserver, useSupported } from '#imports'
import type { UseIntersectionObserverReturn } from '@vueuse/core';
import { useSwiper } from '#imports';

interface Props {
    visibleSlidesCount?: number
    isLoop?: boolean
    items: T[]
}

const props = withDefaults(defineProps<Props>(), {
    visibleSlidesCount: 1,
    isLoop: false,
    items: () => [],
})

const {
    currentSlidesOffset,
    slideToPrevious,
    slideToNext,
} = useSwiper({
    ...props,
})

function _slideToNextSlide() {
    slideToNext()

    if (!slidesList.value) {
        return
    }

    const slide = slidesList.value[currentSlidesOffset.value]

    slide.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'start',
    })
}

function _slideToPreviousSlide() {
    slideToPrevious()

    if (!slidesList.value) {
        return
    }

    const slide = slidesList.value[currentSlidesOffset.value]

    slide.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'start',
    })
}

const slidesList = ref<HTMLLIElement[]>()
const list = ref<HTMLUListElement>()

const slidesIntersectionResults = ref<UseIntersectionObserverReturn[]>()

onMounted(() => {
    slidesIntersectionResults.value = slidesList.value?.map((slide) => {
        return useIntersectionObserver(slide, ([{ isIntersecting, target }]) => {
            const index = +target.id.split('-')[1]

            if (!isIntersecting) {
                return
            }

            const isSlideRight = currentSlidesOffset.value + props.visibleSlidesCount === index
            const isSlideLeft = currentSlidesOffset.value - 1 === index

            if (isSlideRight) {
                slideToNext()
                return
            }

            if (isSlideLeft) {
                slideToPrevious()
                return
            }
        }, {
            immediate: false,
            root: list,
        })
    })

    slidesIntersectionResults.value?.map(({ resume }) => resume())
})

onUnmounted(() => {
    slidesIntersectionResults.value?.forEach((result) => result.stop())
})
</script>

<template>
    <div
        :class="$style.swiper"
        :style="{
            '--slides': visibleSlidesCount,
        }"
    >
        <ul :class="$style.slides" ref="list">
            <li
                v-for="item, index in items"
                :class="$style.slide"
                :key="index"
                ref="slidesList"
                :id="`swiper-${index}`"
            >
                <slot
                    name="slide"
                    :item="item"
                ></slot>
            </li>
        </ul>

        <div :class="$style.addons">
            <slot
                name="navigation"
                :slideToPreviousSlide="_slideToPreviousSlide"
                :slideToNextSlide="_slideToNextSlide"
                :slidesCount="items.length"
                :currentSlide="currentSlidesOffset"
                :visibleSlidesCount="visibleSlidesCount"
            ></slot>
        </div>
    </div>
</template>

<style module>
.swiper {
    --gap: 0.5rem;
    --slides: 5;

    --_gaps-size: var(--gap) + var(--gap) / var(--slides);
    --_column-width: 100% / var(--slides);

    width: 100%;
}
.slides {
    display: flex;
    gap: var(--gap);
    flex-wrap: nowrap;
    overflow: auto;
    scroll-snap-type: x mandatory;
    list-style: none;
}
.slide {
    scroll-snap-align: start;
    flex-grow: 0;
    flex-shrink: 0;
    flex-basis: calc(var(--_column-width) - var(--_gaps-size));
}
.slides::-webkit-scrollbar {
    display: none;
}
</style>
