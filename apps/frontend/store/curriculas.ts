import { defineStore } from 'pinia';
import { Curriculum } from '@types';

export const useCurriculasStore = defineStore('curriculas', () => {
    const curriculas = ref<Curriculum[]>([])

    async function fetchAllCurriculas() {
        curriculas.value = await $fetch('/api/curriculas')
        return curriculas
    }

    return {
        fetchAllCurriculas,
        curriculas,
    }
})
