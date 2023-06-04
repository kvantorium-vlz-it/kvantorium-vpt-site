<script setup lang="ts">
const slides = computed(() => {
    return useSlots().default?.() || []
})

const slidesCount = computed(() => slides.value.length)

const currentSlideIndex = ref(0)

function previousSlide() {
    currentSlideIndex.value = (slidesCount.value + currentSlideIndex.value - 1) % slidesCount.value
}
function nextSlide() {
    currentSlideIndex.value = (currentSlideIndex.value + 1) % slidesCount.value
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
            <template
                v-for="slide, index in slides"
                :key="index"
            >
                <component
                    v-if="index === currentSlideIndex"
                    :is="() => h(slide)"
                />
            </template>
        </ol>
        <slot name="right-thumb">
            <button @click="nextSlide">
                <Icon name="material-symbols:chevron-right" />
            </button>
        </slot>
    </div>
</template>
