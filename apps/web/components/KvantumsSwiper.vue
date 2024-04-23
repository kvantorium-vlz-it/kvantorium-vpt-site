<script setup lang="ts">
interface Props {
    kvantums: {
        name: string
        icon: string
        slug: string
        topics: string[]
        minAge: number
    }[]
}

defineProps<Props>()
</script>

<template>
    <KSwiper
        :visibleSlidesCount="4"
    >
        <KSwiperSlide
            v-for="kvantum, index in kvantums"
            :key="index"
        >
            <TheKvantumsSectionKvantumCard
                :kvantum="kvantum"
            />
        </KSwiperSlide>
    </KSwiper>
</template>
