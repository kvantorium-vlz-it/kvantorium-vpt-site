<script setup lang="ts" generic="T">
import type { UseIntersectionObserverReturn } from '@vueuse/core';

interface Props {
    slidesCount?: number
    items: T[]
    isLoop?: boolean
}

const props = withDefaults(defineProps<Props>(), {
    slidesCount: 1,
    isLoop: false,
})

const {
    currentSlidesOffset,
    maxSlidesOffset,
    slideToPrevious,
    slideToNext,
} = useSwiper({
    items: props.items,
    options: {
        isLoop: props.isLoop,
        visibleSlidesCount: props.slidesCount,
    },
})

function _slideToNextSlide() {
    slideToNext()

    if (!slidesList.value) {
        return
    }

    const slide = slidesList.value[currentSlidesOffset.value]

    slide.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'start'
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
        block: 'center',
        inline: 'start'
    })
}

const minSlideWidth = computed(() => `${100 / (props.slidesCount)}%;`)
const maxSlideWidth = computed(() => `${100 / props.slidesCount}%;`)
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

            const isSlideRight = currentSlidesOffset.value + props.slidesCount === index
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
    <div :class="$style.swiper">
        <ul :class="$style.slides" ref="list">
            <li
                :style="`min-width: ${minSlideWidth}; max-width: ${maxSlideWidth};`"
                v-for="item, index in items"
                :class="$style.slide"
                :id="`swiper-${index}`"
                ref="slidesList"
            >
                <slot
                    :key="index"
                    :item="item"
                ></slot>
            </li>
        </ul>

        <div :class="$style.addons">
            <slot
                name="pagination"
                :slideToPreviousSlide="_slideToPreviousSlide"
                :slideToNextSlide="_slideToNextSlide"
                :slidesCount="items.length"
                :currentSlide="currentSlidesOffset"
                :visibleSlidesCount="slidesCount"
            ></slot>
        </div>
    </div>
</template>

<style module>
.swiper {
    --gap: 0.5rem;
}
.slides {
    display: flex;
    overflow: auto;
    scroll-snap-type: x mandatory;
    margin-inline: calc(var(--gap) / -2);
    list-style: none;
}
.slide {
    scroll-snap-align: start;
    padding-inline: calc(var(--gap) / 2);
}
.slides::-webkit-scrollbar {
    display: none;
}
</style>
