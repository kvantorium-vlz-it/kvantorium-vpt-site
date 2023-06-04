import { defineStore } from "pinia"
import { Kvantum } from '~/assets/typescript/types'

export const useKvantumsStore = defineStore('kvantums', () => {
    const kvantums = ref<Kvantum[]>([])

    const mainKvantum = computed(() => {
        return kvantums.value.filter((kvantum) => !kvantum.isAdditional)
    })

    const additionalKvantums = computed(() => {
        return kvantums.value.filter((kvantum) => kvantum.isAdditional)
    })

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
        kvantums,
        mainKvantum,
        additionalKvantums,
    }
})
