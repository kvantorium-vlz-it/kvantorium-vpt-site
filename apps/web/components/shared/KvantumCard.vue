<script setup lang="ts">
import type { KvantumQueryResult } from '@kvantoriumvlz/shared/queries';
import { ArrowRightIcon } from 'lucide-vue-next'
import type { Kvantum } from '~/assets/typescript/types'

defineProps<{
    kvantum: KvantumQueryResult
}>()
</script>

<template>
    <ShCard>
        <ShCardHeader>
            <ShCardTitle class="flex items-center justify-between">
                <div class="font-display text-2xl leading-[0.75] tracking-tighter font-bold">
                    {{ kvantum.name }}
                </div>
                <img
                    class="w-16 aspect-square object-cover"
                    :src="kvantum.icon.src"
                    alt=""
                >
            </ShCardTitle>
        </ShCardHeader>

        <ShCardContent>
            <ol class="list-decimal list-inside">
                <li v-for="topic in kvantum.topics">
                    {{ topic }}
                </li>
            </ol>

            <div class="mt-2">
                Возрастная категория: {{ kvantum.minimalAge }}+
            </div>
        </ShCardContent>

        <ShCardFooter>
            <ShButton class="flex items-center group/button" as-child>
                <NuxtLink :to="`/kvantums/${kvantum.slug}`">
                    <span>
                        Подробнее о квантуме
                    </span>

                    <ArrowRightIcon class="group-hover/button:ml-2 transition-all" />
                </NuxtLink>
            </ShButton>
        </ShCardFooter>
    </ShCard>
</template>
