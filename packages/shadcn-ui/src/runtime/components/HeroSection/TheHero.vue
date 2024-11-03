<script setup lang="ts">
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
</script>

<template>
    <div class="overflow-hidden">
        <div
            class="
                bg-black h-full p-9 bg-no-repeat bg-cover bg-top min-h-screen
                relative bg-hero-image
                after:absolute after:top-0 after:left-0 after:bottom-0 after:right-0
                after:bg-hero-noice after:mix-blend-overlay after:pointer-events-none
            "
        >
            <HeroTitle class="mt-20 xl:mt-28" />

            <HeroAddress class="mt-8" />

            <div class="grid grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] mt-16">
                <HeroSiteNavigation />

                <div class="w-72 aspect-square flex justify-center items-center">
                    <HeroButton to="/" />
                </div>

                <HeroKvantumsNavigation class="justify-self-end" />
            </div>
        </div>
    </div>
</template>
