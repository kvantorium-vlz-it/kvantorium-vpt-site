<script setup>
import { Pagination, Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'

defineProps({
    kvantums: {
        type: Array,
        required: true,
    },
})

const breakpoints = useBreakpoints({
    desktop: 1024,
})
const isDesktop = breakpoints.greater('desktop')

const onSwiper = (swiperElement) => {
    swiper.value = swiperElement
}

const next = ref(null)
const prev = ref(null)
const swiper = ref()

const modules = ref([Pagination, Navigation])
</script>

<template>
    <div :class="$style.carousel">
        <carousel-chevron
            ref="prev"
            :class="$style.carousel__chevron"
        />
        <Swiper
            v-if="next?.$el && prev?.$el"
            ref="swiper"
            :class="$style.carousel__element"
            :space-between="90"
            :modules="modules"
            :slides-per-view="isDesktop ? 2: 1"
            :navigation="{
                prevEl: prev?.$el,
                nextEl: next?.$el,
                disabledClass: $style.disable,
            }"
            :pagination="{
                clickable: true,
                bulletClass: $style.carousel__bullet,
                bulletActiveClass: $style.active,
                horizontalClass: $style.carousel__pagination,
            }"
            grab-cursor
            auto-height
            @swiper="onSwiper"
        >
            <SwiperSlide
                v-for="(card, index) in kvantums"
                :key="index"
            >
                <kvantum-card :kvantum="card" />
            </SwiperSlide>
        </Swiper>

        <carousel-chevron
            ref="next"
            :class="$style.carousel__chevron"
        />
    </div>
</template>

<style module lang="scss">
@use '@styles/functional' as *;

.carousel {
    display: flex;
    gap: 16px;
    align-items: center;
    justify-content: space-between;

    &__element {
        padding: #{px-to-rem(48px)};
    }

    &__chevron {
        &:first-child {
            transform: rotate(90deg);
        }

        &:last-child {
            transform: rotate(-90deg);
        }

        &.disable {
            cursor: not-allowed;

            color: rgb(var(--c-gray-400));
        }
    }

    &__pagination {
        display: flex;
        gap: #{px-to-rem(4px)};
        align-items: center;
        justify-content: center;
        @include from-desktop {
            gap: #{px-to-rem(8px)};
        }
    }

    &__bullet {
        cursor: pointer;

        display: inline-block;

        aspect-ratio: 1;
        width: #{px-to-rem(8px)};
        height: #{px-to-rem(8px)};

        background: rgb(var(--c-black) / 20%);
        border-radius: var(--br-full);

        &.active {
            background: rgb(var(--c-secondary-700) / 70%);
        }
        @include from-desktop {
            width: #{px-to-rem(12px)};
            height: #{px-to-rem(12px)};
        }
    }
}
</style>
