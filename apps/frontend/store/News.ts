import { defineStore } from 'pinia'

const query = groq`*[_type == "News"]{
    name,
    shortContent,
    'id': _id,
    'content': content[]{
        ...,
        'asset': asset->url,
    }
}`

interface INews {
    id: string
    name: string
    shortContent: string
    content: unknown[]
}

export const useNewsStore = defineStore('news', () => {
    const { data, refresh } = useSanityQuery<INews[]>(query)

    const news = computed<INews[]>(() => data.value || [])

    return {
        news,
    }
})
