<script setup lang="ts">
import { ArrowRightIcon } from 'lucide-vue-next'

defineProps<{
    kvantumName: string
    topics: string[]
    fromAge: number
    kvantumImage: string
    to?: string
}>()
</script>

<template>
    <ShCard>
        <ShCardHeader>
            <ShCardTitle class="flex items-center justify-between">
                <div class="font-display text-2xl leading-[0.75] tracking-tighter font-bold">
                    {{ kvantumName }}
                </div>
                <img
                    class="w-16 aspect-square object-cover"
                    :src="kvantumImage"
                    alt=""
                >
            </ShCardTitle>
        </ShCardHeader>

        <ShCardContent>
            <ol class="list-decimal list-inside">
                <li v-for="topic in topics">
                    {{ topic }}
                </li>
            </ol>

            <div class="mt-2">
                Возрастная категория: {{ fromAge }}+
            </div>
        </ShCardContent>

        <ShCardFooter>
            <ShButton class="flex items-center group/button" as-child>
                <NuxtLink :to="to">
                    <span>
                        Подробнее о квантуме
                    </span>

                    <ArrowRightIcon class="group-hover/button:ml-2 transition-all" />
                </NuxtLink>
            </ShButton>
        </ShCardFooter>
    </ShCard>
</template>
