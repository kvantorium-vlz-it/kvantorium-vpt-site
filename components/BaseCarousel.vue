<script setup lang="tsx">
import { Component, PropType } from 'vue'

const PERCENT_TO_SWIPE = 25
const ANIMATION_CLASS = 'carousel-enter-active'

const slots = ref(useSlots().default())
const slideCount = computed(() => slots.value.length)

if (slots.value.length === 0) {
    throw new Error('Carousel must contain at least one block')
}

const wrapper = ref<HTMLElement>(null)
const currentSlideIndex = ref(0)

type SwipeDirection = 'LEFT' | 'RIGHT'
const swipeDirection = ref<SwipeDirection>('RIGHT')

// TODO extract compasable
onMounted(() => {
    let startX: number | null = null

    useSwipe(wrapper, {
        onSwipeStart: (e) => {
            startX = e.touches.item(0).clientX
        },
        onSwipeEnd: (e, direction) => {
            const deltaX = Math.abs(startX - e.changedTouches.item(0).clientX)
            const wrapperWidth = parseFloat(getComputedStyle(wrapper.value).width)

            if (deltaX < (wrapperWidth / 100 * PERCENT_TO_SWIPE)) {
                startX = null
                return
            }
            handleChevronClick(direction as SwipeDirection)

            startX = null
        },
    })
})

const makeSwipe = (swipeDelta: number) => {
    currentSlideIndex.value = (
        (currentSlideIndex.value + slideCount.value) + swipeDelta
    ) % slideCount.value
}

const handleChevronClick = (side: SwipeDirection) => {
    swipeDirection.value = side
    makeSwipe((-1) ** +(side === 'LEFT'))
}

const animation = computed(() => {
    const className = `${ANIMATION_CLASS}-${swipeDirection.value.toLowerCase()}`
    return useCssModule()[className]
})

const CarouselSlide = defineComponent({
    name: 'CarouselSlide',
    props: {
        slide: {
            type: Object as PropType<Component>,
            required: true,
        }
    },
    setup: (props) => {
        return () => (
            <div>
                { h(props.slide) }
            </div>
        )
    }
})
</script>

<template>
    <div :class="$style.carousel">
        <base-carousel-chevron
            :class="$style.carousel__chevron"
            @click="handleChevronClick('LEFT')"
        />
        <div ref="wrapper" :class="$style.carousel__wrapper">
            <ClientOnly v-if="slots.length > 0">
                <transition
                    v-for="(slot, index) in slots"
                    :key="index"
                    :enter-active-class="animation"
                    :leave-active-class="$style['carousel-leave-active']"
                >
                    <carousel-slide
                        v-if="index === currentSlideIndex"
                        :slide="slot"
                    />
                </transition>
            </ClientOnly>
        </div>
        <base-carousel-chevron
            :class="$style.carousel__chevron"
            @click="handleChevronClick('RIGHT')"
        />
    </div>
</template>

<style module lang="scss">
@use '@styles/functional' as *;

/* stylelint-disable-next-line order/order */
.carousel {
    display: flex;
    align-items: center;
    justify-content: space-between;

    &__chevron {
        &:first-child {
            transform: rotate(90deg);
        }

        &:last-child {
            transform: rotate(-90deg);
        }
    }

    &__wrapper {
        padding: #{px-to-rem(24px)};
    }
}

/* stylelint-disable-next-line order/order */
$animation-duration: 0.5s;
$animation-function: ease-out;

.carousel-enter-active-right {
    animation: carousel-right $animation-duration;
}

.carousel-enter-active-left {
    animation: carousel-left $animation-duration;
}

.carousel-leave-active {
    position: absolute;
    z-index: var(--z-underlay);
    top: 0;
    left: 0;

    visibility: none;
}

/* stylelint-disable-next-line order/order */
$mid-translate: 15%;

/// Mixin for create two similar animation
///
/// @param { 'left' | 'right' } side
@mixin animation($direction) {
    @keyframes carousel-#{$direction} {
        0% {
            transform: translateX(0);

            opacity: 1;
        }

        50% {
            opacity: 0;
            @if $direction == 'left' {
                transform: translateX((-$mid-translate));
            } @else {
                transform: translateX($mid-translate);
            }
        }

        100% {
            transform: translateX(0);

            opacity: 1;
        }
    }
}
@include animation(left);
@include animation(right);
</style>
