<script setup>
import { Pagination } from 'swiper'
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

const swiper = ref(null)

const modules = ref([Pagination])

const updateHeight = () => setTimeout(() => {
    swiper.value.update()
    swiper.value.updateSize(1000)
}, 0)

const slidesInRow = computed(() => isDesktop.value ? 2 : 1)
</script>

<template>
    <div :class="$style.carousel">
        <Swiper
            ref="swiper"
            :class="$style.carousel__element"
            :space-between="90"
            :modules="modules"
            :slides-per-view="slidesInRow"
            :pagination="{
                clickable: true,
                bulletElement: 'button',
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
                <kvantum-card
                    :kvantum="card"
                    @show-full-description="updateHeight"
                    @hide-full-description="updateHeight"
                />
            </SwiperSlide>
        </Swiper>
    </div>
</template>

<style module lang="scss">
@use '@styles/main.scss' as *;

.carousel {
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;

    &__element {
        padding: #{rem(12px)};
    }

    &__pagination {
        display: flex;
        gap: #{rem(4px)};
        align-items: center;
        justify-content: center;

        margin-top: #{rem(24px)};
    }

    &__bullet {
        cursor: pointer;

        display: inline-block;

        aspect-ratio: 1;
        width: #{rem(8px)};
        height: #{rem(8px)};

        background: rgb(var(--c-black) / 20%);
        border: none;
        border-radius: var(--br-full);

        &.active {
            background: rgb(var(--c-secondary-700) / 70%);
        }
    }
    @include from-breakpoint(desktop) {
        gap: rem(16px);

        &__element {
            padding: #{rem(48px)};
        }

        &__pagination {
            gap: #{rem(8px)};

            margin-top: #{rem(32px)};
        }

        &__bullet {
            width: #{rem(12px)};
            height: #{rem(12px)};
        }
    }
}
</style>
