<script setup lang="ts">
import type { NewsQueryResult } from '@kvantoriumvlz/shared';
import { ArrowUpRightIcon } from 'lucide-vue-next'
import type { News } from '~/assets/typescript/types'

defineProps<{
    news: NewsQueryResult
}>()

const formatter = new Intl.DateTimeFormat('ru-RU', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
})
</script>

<template>
    <ShCard class="overflow-hidden">
        <img
            class="w-full aspect-video object-cover"
            :src="news.previewImage.src"
            :alt="news.previewImage.alt ?? undefined"
        >

        <ShCardHeader>
            <ShCardTitle class="font-display leading-none tracking-tighter">
                <span>{{ news.title }}</span>
            </ShCardTitle>

            <div class="text-gray-500">
                {{ formatter.format(new Date(news.publishDate)) }}
            </div>
        </ShCardHeader>

        <hr>

        <ShCardContent />

        <ShCardFooter class="items-start justify-between">
            <ul class="flex flex-wrap gap-1">
                <li v-for="tag in news.tags">
                    <ShBadge variant="outline">
                        {{ tag.name }}
                    </ShBadge>
                </li>
            </ul>

            <ShButton class="group/news-card-button" as-child>
                <NuxtLink :to="`/news/${news.slug}`">
                    <span>
                        Читать новость
                    </span>

                    <ArrowUpRightIcon class="group-hover/news-card-button:mr-2 transition-all group-hover/news-card-button:rotate-45" />
                </NuxtLink>
            </ShButton>
        </ShCardFooter>
    </ShCard>
</template>
