import { defineStore } from '@pinia/nuxt/dist/runtime/composables';
import { Curriculum } from '~/assets/typescript/types';

export const useCurriculasStore = defineStore('curriculas', () => {
    const curriculas = ref<Curriculum[]>([])

    async function fetchAllCurriculas() {
        curriculas.value = await $fetch('/api/curriculas')
        return curriculas
    }

    return {
        fetchAllCurriculas,
    }
})
