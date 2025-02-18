<script setup lang="ts">
import { MapPinIcon } from 'lucide-vue-next'
</script>

<template>
    <address
        class="
            w-fit mx-auto
            not-italic
            text-body-extra-small tablet:text-heading-5 laptop:text-heading-4 desktop:text-heading-4
            leading-heading -tracking-[0.05ch]
            group relative
        "
    >
        <BaseLink as-child theme="light" class="text-2xl">
            <NuxtLink
                href="geo:48.786934,44.772160"
                class="flex justify-center items-baseline gap-2"
            >
                <MapPinIcon class="size-3 tablet:size-5 laptop:size-6 desktop:size-6" />

                <span
                    class="
                        after:h-0.5 laptop:after:h-1 after:rounded-3xl
                        after:absolute after:-bottom-2 after:left-full after:right-full
                        after:bg-background
                        after:transition-all
                        group-hover:after:left-0 group-hover:after:right-0
                    "
                >
                    г. Волжский, ул. Машиностроителей, 15
                </span>
            </NuxtLink>
        </BaseLink>
    </address>
</template>
