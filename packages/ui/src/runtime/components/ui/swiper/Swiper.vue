<script setup lang="ts" generic="T">
import { computed, onMounted, onUnmounted, ref, useIntersectionObserver, useIntervalFn, useSwiper } from '#imports'
import type { UseIntersectionObserverReturn } from '@vueuse/core';
import type { UnionStringLiteralsWithString } from '../../../assets/ts/types';

interface Props {
    visibleSlidesCount?: number
    isLooped?: boolean
    is?: UnionStringLiteralsWithString<'ul' | 'ol' | 'div'>
    showScrollbar?: boolean
    isAutoPlay?: boolean
    autoPlayInterval?: number
}

const props = withDefaults(defineProps<Props>(), {
    isLooped: false,
    visibleSlidesCount: 1,
    is: 'div',
    showScrollbar: false,
    isAutoPlay: false,
    autoPlayInterval: 10000,
})

const list = ref<HTMLUListElement | HTMLOListElement | HTMLElement>()
const slides = computed(() => [...list.value?.children || []] as HTMLElement[])
const slidesCount = computed(() => slides.value.length)

const {
    currentView,
    isFirstView,
    isLastView,
    viewsCount,
    slideToNextView,
    slideToPreviousView,
} = useSwiper({
    slidesCount: slidesCount,
    isLooped: props.isLooped,
    slidesPerView: props.visibleSlidesCount,
})

function _updateScrolling() {
    if (!slides.value) {
        return
    }

    const slide = slides.value[currentView.value]

    slide.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'start',
    })
}

function _slideToNextView() {
    slideToNextView()
    _updateScrolling()
}

function _slideToPreviousView() {
    slideToPreviousView()
    _updateScrolling()
}

const slidesIntersectionResults = ref<UseIntersectionObserverReturn[]>()

onMounted(() => {
    slidesIntersectionResults.value = slides.value?.map((slide) => {
        return useIntersectionObserver(slide, ([{ isIntersecting, target }]) => {
            const index = Array.from(list.value?.children || []).indexOf(slide)

            if (!isIntersecting) {
                return
            }

            const isSlideRight = currentView.value + props.visibleSlidesCount === index
            const isSlideLeft = currentView.value - 1 === index

            if (isSlideRight) {
                _slideToNextView()
                return
            }

            if (isSlideLeft) {
                _slideToPreviousView()
                return
            }
        }, {
            immediate: false,
            root: list,
        })
    })

    slidesIntersectionResults.value?.map(({ resume }) => resume())
})

useIntervalFn(() => {
    _slideToNextView()
}, props.autoPlayInterval, {
    immediate: props.isAutoPlay,
})

onUnmounted(() => {
    slidesIntersectionResults.value?.forEach((result) => result.stop())
})
</script>

<template>
    <div
        :class="[
            $style.swiper,
            {
                [$style['show-scrollbar']]: showScrollbar,
            }
        ]"
    >
        <component
            :class="$style.slides"
            :is="is"
            ref="list"
        >
            <slot></slot>
        </component>

        <div :class="$style.addons">
            <slot
                name="navigation"
                :currentView="currentView"
                :viewsCount="viewsCount"
                :slidesCount="slidesCount"
                :isFirstView="isFirstView"
                :isLastView="isLastView"
                :slideToPreviousView="_slideToPreviousView"
                :slideToNextView="_slideToNextView"
            ></slot>
        </div>
    </div>
</template>

<style module>
.swiper {
    --gap: 0.5rem;
    --slides-per-view: v-bind(visibleSlidesCount);
}
.slides {
    --gaps-size: calc(var(--gap) - var(--gap) / var(--slides-per-view));
    --slide-width: calc(100% / var(--slides-per-view));

    display: flex;
    gap: var(--gap);
    flex-wrap: nowrap;
    overflow: auto;
    scroll-snap-type: x mandatory;
    list-style: none;
}
.slides > * {
    scroll-snap-align: start;
    flex-grow: 0;
    flex-shrink: 0;
    flex-basis: calc(var(--slide-width) - var(--gaps-size));
}
.slides::-webkit-scrollbar {
    display: none;
}

.show-scrollbar > .slides::-webkit-scrollbar {
    display: block;
}
.show-scrollbar > .slides {
    scrollbar-color: var(--c-site-background-darker-2) var(--c-site-background-darker-1);
    scrollbar-width: thin;
}
</style>
