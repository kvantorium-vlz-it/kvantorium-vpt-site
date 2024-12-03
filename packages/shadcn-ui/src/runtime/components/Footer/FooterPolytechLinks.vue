<script setup lang="ts">
import { MailIcon, GlobeIcon } from 'lucide-vue-next'

const links = [
    { label: 'volpt@volganet.ru', to: 'mailto:volpt@volganet.ru', icon: MailIcon },
    { label: 'volpt.ru', to: 'https://volpt.ru', icon: GlobeIcon },
]
</script>

<template>
    <section>
        <h2 class="font-display text-3xl mb-2 tracking-tighter leading-none">
            Техникум
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
