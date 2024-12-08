<script setup lang="ts">
import { MapPinIcon } from 'lucide-vue-next'
</script>

<template>
    <address
        class="
            w-fit mx-auto
            font-body text-center not-italic text-white text-lg xl:text-2xl
            group relative
        "
    >
        <NuxtLink
            href="geo:48.786934,44.772160"
            class="flex justify-center items-center gap-2"
        >
            <MapPinIcon />
            <span
                class="
                    after:h-0.5 after:rounded-3xl
                    after:absolute after:-bottom-2 after:left-1/2 after:right-1/2
                    after:bg-accent
                    after:transition-all
                    group-hover:after:left-0 group-hover:after:right-0
                "
            >
                Волжский, ул. Машиностроителей, 15
            </span>
        </NuxtLink>
    </address>
</template>
