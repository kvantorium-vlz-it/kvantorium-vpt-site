<script setup lang="ts">
import { ArrowUpRightIcon } from 'lucide-vue-next'

withDefaults(defineProps<{
    title: string
    image: {
        src: string
        alt?: string
    }
    publishDate: Date
    content: string
    tags?: string[]
}>(), {
    tags: () => []
})

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
            :src="image.src"
            :alt="image.alt"
        >

        <ShCardHeader>
            <ShCardTitle class="font-display leading-none tracking-tighter">
                <span>{{ title }}</span>
            </ShCardTitle>

            <div class="text-gray-500">
                {{ formatter.format(publishDate) }}
            </div>
        </ShCardHeader>

        <hr>

        <ShCardContent />

        <ShCardFooter class="items-start justify-between">
            <ShCardDescription>
                <ul class="flex flex-wrap gap-1">
                    <li v-for="tag in tags">
                        <ShBadge variant="outline">
                            {{ tag }}
                        </ShBadge>
                    </li>
                </ul>
            </ShCardDescription>

            <ShButton class="group/news-card-button">
                <span>
                    Читать новость
                </span>

                <ArrowUpRightIcon class="group-hover/news-card-button:mr-2 transition-all group-hover/news-card-button:rotate-45" />
            </ShButton>
        </ShCardFooter>
    </ShCard>
</template>
