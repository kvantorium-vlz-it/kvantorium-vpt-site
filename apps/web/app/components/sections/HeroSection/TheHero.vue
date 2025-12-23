<script setup lang="ts">
import { useElementSize, useScroll, useWindowScroll } from '@vueuse/core'
import { computed, onMounted, ref, useTemplateRef, watch } from 'vue'

// ============================================================================
// Links for future
const siteNavigationLinks = [
    { label: 'Информация', to: '/info' },
    { label: 'Квантумы', to: '/kvantums' },
    { label: 'Новости', to: '/news' },
    { label: 'Часто задаваемые вопросы', to: '/faq' },
    { label: 'Мы на карте', to: '/map' },
]

const kvantumsNavigationLinks = [
    { label: 'VR/AR-квантум', to: '/' },
    { label: 'IT-квантум', to: '/' },
    { label: 'медиа-квантум', to: '/' },
    { label: 'аэро-квантум', to: '/' },
    { label: 'авто-квантум', to: '/' },
    { label: 'шахматы-квантум', to: '/' },
    { label: 'робо-квантум', to: '/' },
]
// ============================================================================

const hero = useTemplateRef('hero')

const { y } = useWindowScroll()
const { height } = useElementSize(hero)

const scrollPercentage = computed(() => Math.min(y.value / (height.value), 1))
const rounding = ref(0 + 'px')

onMounted(() => {
    watch(scrollPercentage, () => {
        rounding.value = scrollPercentage.value * 64 + 'px'
    })
})
</script>

<template>
    <div
        class="overflow-hidden"
        ref="hero"
        :style="{ borderBottomRightRadius: rounding, borderBottomLeftRadius: rounding }"
    >
        <div
            class="
                bg-black h-full p-9 bg-no-repeat bg-cover bg-top min-h-screen
                relative bg-hero-image
                after:absolute after:top-0 after:left-0 after:bottom-0 after:right-0
                after:bg-hero-noice after:mix-blend-overlay after:pointer-events-none
                flex justify-center items-center
            "
        >
            <div>

                <HeroTitle class="mt-10 laptop:mt-12" />

                <HeroAddress class="mt-2 laptop:mt-4" />

                <div class="grid gap-2 grid-cols-1 laptop:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] mt-8">
                    <HeroSiteNavigation class="laptop:col-start-1" />

                    <div class="w-72 aspect-square justify-center items-center hidden laptop:flex">
                        <HeroButton :to="{ path: '/', hash: '#curricula' }" />
                    </div>

                    <HeroKvantumsNavigation class="laptop:col-start-3" />
                </div>
            </div>
        </div>
    </div>
</template>
