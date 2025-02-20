<script setup lang="ts">
import { ArrowUpRightIcon } from 'lucide-vue-next'
import type { News } from '~/assets/typescript/types'

defineProps<{
    news: News
}>()

const formatter = new Intl.DateTimeFormat('ru-RU', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
})
</script>

<template>
<template>
    <ShCard class="overflow-hidden relative group">
        <img
            :src="news.previewImage.asset.src!"
            class="aspect-video object-cover w-full max-w-full"
        >

        <ShBadge variant="secondary" theme="light" size="small" class="absolute top-6 right-6">
            {{ formatter.format(new Date(news.publishDate)) }}
        </ShBadge>

        <ShCardHeader class="pb-6 pt-3">
            <ShCardTitle class="font-bold leading-heading -tracking-tight group-hover:-translate-y-1 transition-all">
                {{ news.title }}
            </ShCardTitle>

            <ul class="flex gap-1 flex-wrap">
                <li v-for="tag in news.tags">
                    <ShBadge variant="outline" size="small">
                        #{{ tag.name }}
                    </ShBadge>
                </li>
            </ul>
        </ShCardHeader>

        <hr>

        <ShCardContent class="pt-6">
            <ShButton
                variant="secondary"
                size="small"
                class="group/button"
                as-child
            >
                <NuxtLink :to="`/news/${news.slug}/`">
                    Читать полностью

                    <ArrowUpRightIcon class="size-4 group-hover/button:translate-x-0.5 transition-all group-hover/button:-translate-y-0.5" />
                </NuxtLink>
            </ShButton>
        </ShCardContent>
    </ShCard>
</template>
</template>
