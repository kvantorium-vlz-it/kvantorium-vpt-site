<script setup lang="ts">
import { News } from '@types';

defineProps<{
    news: News
}>()
</script>

<template>
    <article>
        <header :id="news.id" class="flex justify-between gap-[10px] mb-[20px]">
            <h2 class="text-[#313340] font-bold text-[30px] flex-1">
                {{ news.heading }}
            </h2>

            <time class="text-[#6C708C] font-medium text-[24px]">
                {{ news.date }}
            </time>
        </header>

        <RichText :blocks="news.content" class="mb-[30px]" />

        <ImageSlider
            :images="news.images"
        />
    </article>
</template>
