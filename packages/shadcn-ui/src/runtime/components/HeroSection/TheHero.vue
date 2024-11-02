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

                <div class="w-10 aspect-square bg-red-500"></div>

                <HeroKvantumsNavigation class="justify-self-end" />
            </div>
        </div>
    </div>
</template>
