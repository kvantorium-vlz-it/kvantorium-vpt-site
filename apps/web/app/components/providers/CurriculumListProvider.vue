<script lang="ts">
import type { CurriculumProjection, KvantumProjection as _Kvantum } from '#shared/sanity'

interface Kvantum {
    _type: _Kvantum['_type']
    _id: _Kvantum['_id']
    slug: string
}

interface CurriculumListProviderProps<T extends Kvantum = Kvantum> {
    fetchPerPage?: number
    kvantum?: T
    level?: CurriculumProjection['level']
}

const DEFAULT_PER_PAGE = 6;
</script>

<script setup lang="ts" generic="T extends Kvantum = Kvantum">
import { DOCUMENT_TYPES } from '@kvantoriumvlz/shared'
import type { InferResultItem } from 'groqd';
import { q, curriculumProjection, kvantumProjection } from '#shared/sanity'

const props = withDefaults(defineProps<CurriculumListProviderProps<T>>(), {
    fetchPerPage: DEFAULT_PER_PAGE,
})

const kvantum = computed(() => props.kvantum)
const level = computed(() => props.level)
const page = ref(0)
const curricula = shallowRef<_Curriculum[]>([])

const fetchCurricula = async () => {
    const {
        data
    } = await useSanityQuery<_Curriculum[]>(curriculaQueryBuilder.value.query)

    return data.value ?? []
}

const reset = async () => {
    page.value = 0
    curricula.value = await fetchCurricula()
}

const loadCurricula = async () => {
    const fetchedCurricula = await fetchCurricula()

    curricula.value = [...curricula.value, ...fetchedCurricula]
}

const loadMoreCurricula = async () => {
    page.value++
    await loadCurricula()
}

const curriculaQueryBuilder = computed(() => {
    let builder = q
        .star
        .filterByType(DOCUMENT_TYPES.CURRICULUM)
        .project((sub) => ({
            ...curriculumProjection,
            kvantum: sub.field('kvantum').deref().project(kvantumProjection)
        }))

    if (typeof kvantum.value !== 'undefined') {
        builder = builder.filterBy(`kvantum._id == "${kvantum.value._id}"`)
    }

    if (typeof level.value !== 'undefined') {
        builder = builder.filterBy(`level == ${level.value}`)
    }

    return builder.slice(page.value * props.fetchPerPage, (page.value + 1) * props.fetchPerPage)
})

type _Curriculum = InferResultItem<typeof curriculaQueryBuilder.value>

await loadCurricula()
watch([kvantum, level], reset)
</script>

<template>
    <slot
        :curricula
        :loadCurricula
        :loadMoreCurricula
        :reset
    />
</template>
