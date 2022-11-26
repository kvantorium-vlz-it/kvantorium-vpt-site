<script setup lang="ts">
import { useSwiper } from '@/compasables/useSwiper'

interface IKvantum {
    name: string
    description: string
    image: string
    to?: string
}

const props = withDefaults(defineProps<{
    kvantums: IKvantum[]
    itemsInRow?: number
}>(), {
    itemsInRow: 1,
})

const kvantums = toRef(props, 'kvantums')

const itemsInRow = toRef(props, 'itemsInRow')

const slidesRef = ref<HTMLElement>()

const {
    current,
    firstSlideIndex,
    lastSlideIndex,
    visibleSlides,
    slides,

    selectNextSlide,
    selectPrevSlide,
    selectSlide,
} = useSwiper(kvantums.value.length, itemsInRow)

const visibleKvantums = computed<Map<IKvantum, boolean>>(() => {
    return new Map<IKvantum, boolean>(kvantums.value.map((kvantum, index) => {
        return [kvantum, visibleSlides.value.includes(index)]
    }))
})

useSwipe(slidesRef, {
    onSwipeEnd: (_event, direction) => {
        if (direction === 'RIGHT') {
            selectPrevSlide()
        } else if (direction === 'LEFT') {
            selectNextSlide()
        }
    }
})
</script>

<template>
    <div :class="$style.swiper">
        <div :class="$style.swiper__wrapper">
            <button
                :class="[
                    $style.swiper__chevron,
                    $style.left,
                ]"
                :disabled="current === firstSlideIndex"
                @click="selectPrevSlide"
            >
                <NuxtIcon name="chevron" />
            </button>
            <div :class="$style.swiper__slides" ref="slidesRef">
                <template
                    v-for="(kvantum, index) in kvantums"
                    :key="index"
                >
                    <KeepAlive>
                        <KvantumCard
                            v-if="visibleKvantums.get(kvantum)"
                            :kvantum="kvantum"
                        />
                    </KeepAlive>
                </template>
            </div>
            <button
                :class="[
                    $style.swiper__chevron,
                    $style.right,
                ]"
                :disabled="current === lastSlideIndex"
                @click="selectNextSlide"
            >
                <NuxtIcon name="chevron" />
            </button>
        </div>
        <div :class="$style.swiper__bullets">
            <button
                v-for="slide in slides"
                :class="{
                    [$style.swiper__bullet]: true,
                    [$style.current]: slide === current,
                }"
                @click="() => selectSlide(slide)"
            ></button>
        </div>
    </div>
</template>

<style module lang="scss">
@use '@styles/main.scss' as *;

.swiper {

    &__wrapper {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    &__chevron {
        border: none;
        background-color: transparent;
        padding: 0;
        cursor: pointer;
        width: fit-content;
        height: fit-content;

        @include typo(body-1-normal);

        &.left {
            transform: rotate(90deg);
        }
        &.right {
            transform: rotate(-90deg);
        }
    }
    &__slides {
        overflow-x: clip;
        padding: rem(12px);
        flex: 1 0 0;

        display: flex;
        align-items: flex-start;
        gap: rem(48px);

        & > * {
            flex: 1 0 0;
        }
    }
    &__bullets {
        display: flex;
        justify-content: center;
        gap: rem(8px);
    }
    &__bullet {
        border: none;
        background-color: transparent;
        padding: 0;
        width: rem(12px);
        height: rem(12px);
        border-radius: 1000vh;
        cursor: pointer;
        border: rem(2px) solid rgb(var(--c-secondary-700));

        &.current {
            background-color: rgb(var(--c-secondary-700) / 30%);
        }
    }

    @include from-breakpoint(desktop) {
        &__slides {
            padding: rem(48px) rem(48px) rem(12px);
        }
    }
}
</style>
