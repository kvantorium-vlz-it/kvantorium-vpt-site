<script setup lang="ts" generic="T">
const props = defineProps<{
    slides: T[]
}>()
const {
    slides
} = toRefs(props)

const slidesCount = computed(() => slides.value.length)
const currentSlideIndex = ref(0)

function previousSlide() {
    const newIndex = slidesCount.value + currentSlideIndex.value - 1
    currentSlideIndex.value = (newIndex) % slidesCount.value
}
function nextSlide() {
    const newIndex = currentSlideIndex.value + 1
    currentSlideIndex.value = (newIndex) % slidesCount.value
}
</script>

<template>
    <div>
        <slot name="left-thumb">
            <button @click="previousSlide">
                <Icon name="material-symbols:chevron-left" />
            </button>
        </slot>
        <ol>
            <li
                v-for="slide, index in slides"
                :key="index"
            >
                <slot
                    v-if="currentSlideIndex === index"
                    name="slide"
                    :slide="slide"
                    :slideIndex="index"
                ></slot>
            </li>
        </ol>
        <slot name="right-thumb">
            <button @click="nextSlide">
                <Icon name="material-symbols:chevron-right" />
            </button>
        </slot>
    </div>
</template>
