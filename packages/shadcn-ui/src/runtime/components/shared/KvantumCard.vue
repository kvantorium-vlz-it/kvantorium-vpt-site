<script setup lang="ts">
import { ArrowUpCircleIcon } from 'lucide-vue-next'

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
            <ShCardTitle class="order-last font-display text-4xl font-normal">
                {{ kvantumName }}
            </ShCardtitle>

            <ShCardDescription class="flex items-center justify-between">
                <img
                    class="w-16 aspect-square object-cover"
                    :src="kvantumImage"
                    alt=""
                >

                <NuxtLink class="aspect-square h-full" to="/">
                    <ArrowUpCircleIcon
                        class="rotate-45"
                        :size="64"
                        :stroke-width="1"
                    />
                </NuxtLink>
            </ShCardDescription>
        </ShCardHeader>

        <ShCardContent>
            <ol class="list-decimal list-inside">
                <li v-for="topic in topics">
                    {{ topic }}
                </li>
            </ol>
        </ShCardContent>

        <ShCardFooter>
            Возрастная категория: {{ fromAge }}+
        </ShCardFooter>
    </ShCard>
</template>
