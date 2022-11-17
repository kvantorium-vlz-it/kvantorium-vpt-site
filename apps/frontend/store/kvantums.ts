import { defineStore } from "pinia"

interface IKvantum {
    name: string
    description: unknown[]
    shortDescription: string
    id: string
    icon: string
}

const query = groq`*[_type == "Kvantum"] {
    description[]{
        ...,
        'asset': asset->url,
    },
    name,
    shortDescription,
    'id': _id,
    'icon': icon.asset->url,
}`

export const useKvantumsStore = defineStore('kvantums', () => {
    const { data, refresh } = useSanityQuery<IKvantum[]>(query)

    const kvantums = computed<IKvantum[]>(() => data.value || [])

    const getKvantumById = (id: string) => kvantums.value.find(_k => _k.id === id)

    return {
        kvantums,
        refresh,
        getKvantumById,
    }
})
