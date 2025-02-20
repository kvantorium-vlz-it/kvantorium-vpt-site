<script setup lang="ts">
import { ArrowUpRightIcon } from 'lucide-vue-next';
import type { Kvantum } from '~/assets/typescript/types'

defineProps<{
    kvantum: Kvantum
}>()
</script>

<template>
    <ShCard class="group flex flex-col">
        <ShCardHeader>
            <ShBadge class="w-fit" variant="outline" size="small">
                Направление
            </ShBadge>

            <ShCardTitle class="group-hover:ml-2 transition-all font-serif font-bold leading-input -tracking-tight text-2xl flex justify-between gap-2">
                <span>
                    {{ kvantum.name }}
                </span>

                <img
                    class="size-14"
                    :src="kvantum.icon.asset.src!"
                    alt=""
                >
            </ShCardTitle>
        </ShCardHeader>

        <ShCardContent class="flex-1">
            <ul class="list-decimal pl-[1.5ch] leading-input mb-2">
                <li v-for="topic in kvantum.topics">
                    {{ topic }}
                </li>
            </ul>

            <p>
                Возрастная категория: <span class="text-secondary font-bold">12+</span>
            </p>
        </ShCardContent>

        <ShCardFooter>
            <ShButton as-child variant="secondary" class="group/button">
                <NuxtLink :to="`/kvantums/${kvantum.slug}/`">
                    Подробнее

                    <ArrowUpRightIcon class="size-4 group-hover/button:translate-x-0.5 transition-all group-hover/button:-translate-y-0.5" />
                </NuxtLink>
            </ShButton>
        </ShCardFooter>
    </ShCard>
</template>
