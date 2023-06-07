import { defineStore } from 'pinia'
import { News } from '~/assets/typescript/types'

export const useNewsStore = defineStore('news', () => {
    const news = ref<News[]>([])

    async function fetchAllNews() {
        news.value = await $fetch('/api/news')
        return news.value
    }

    return {
        fetchAllNews,
        news,
    }
})
