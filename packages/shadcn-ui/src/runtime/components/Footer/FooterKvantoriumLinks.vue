<script setup lang="ts">
import { MailIcon, PhoneIcon, MapPinIcon } from 'lucide-vue-next'

const links = [
    { label: 'kvantoriumvlz@volpt.com', to: 'mailto:kvantoriumvlz@volpt.com', icon: MailIcon },
    { label: '8(902)383-50-24', to: 'tel:89023835024', icon: PhoneIcon },
    { label: 'Волжский ул. Машиностроителей, 15, 404121', to: 'geo:48.786934,44.772160', icon: MapPinIcon },
]
</script>

<template>
    <section>
        <h2 class="font-display text-3xl mb-2 tracking-tighter leading-none">
            Навигация
        </h2>

        <ul class="flex flex-col gap-y-0.5">
            <li v-for="link in links">
                <NuxtLink
                    class="grid grid-cols-[auto,minmax(auto,1fr)] gap-2 items-center group/footer-kvantorium-links hover:pl-2 transition-all"
                    :to="link.to"
                >
                    <component
                        :is="link.icon"
                        :size="16"
                        class="group-hover/footer-kvantorium-links:mb-1 transition-all"
                    />

                    <span>{{ link.label }}</span>
                </NuxtLink>
            </li>
        </ul>
    </section>
</template>
