import { defineStore } from "pinia"
import { Kvantum } from '@kvantorium-vpt-site/sanity-schema'

export const useKvantumsStore = defineStore('kvantums', () => {
    const kvantums = ref<Kvantum[]>([])

    async function fetchAllKvantuns() {
        kvantums.value = await $fetch('/api/kvantums')
        return kvantums
    }

    async function fetchKvantumById(id: string) {
        return await $fetch('/api/kvantums/:id', {
            params: {
                id,
            }
        })
    }

    return {
        fetchAllKvantuns,
        fetchKvantumById,
    }
})
