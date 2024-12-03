<script setup lang="ts">
import { ArrowUpRightIcon } from 'lucide-vue-next'

const navigation = [
    { label: 'Главная', to: '/' },
    { label: 'О нас', to: '/about/' },
    { label: 'Новости', to: '/news/' },
    { label: 'Направления', to: '/kvantums/' },
]
</script>

<template>
    <section>
        <h2 class="font-display text-3xl mb-2 tracking-tighter leading-none">
            Навигация
        </h2>

        <ul class="flex flex-col gap-y-0.5">
            <li v-for="link in navigation">
                <NuxtLink
                    class="grid grid-cols-[auto,minmax(auto,1fr)] gap-2 items-center group/footer-link hover:pl-2 transition-all"
                    :to="link.to"
                >
                    <ArrowUpRightIcon
                        class="group-hover/footer-link:rotate-45 transition-all"
                        :size="16"
                    />

                    <span>
                        {{ link.label }}
                    </span>
                </NuxtLink>
            </li>
        </ul>
    </section>
</template>
