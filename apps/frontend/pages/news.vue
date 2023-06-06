<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useNewsStore } from '@/store/news'

const store = storeToRefs(useNewsStore())
const news = store.news
</script>

<template>
    <Section heading="Новости">
        <ul class="flex flex-col gap-[20px]">
            <li
                v-for="post in news"
                :key="post.id"
            >
                <NewsPost
                    :news="post"
                />
            </li>
        </ul>
    </Section>
</template>
