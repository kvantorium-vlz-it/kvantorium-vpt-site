<script setup lang="ts">
import { DOCUMENT_TYPES } from '@kvantoriumvlz/shared';
import type { InferResultItem } from 'groqd'
import { q, curriculumProjection } from '#shared/sanity';

const props = defineProps<{
    id?: string
}>()

const builder = q
    .star
    .filterByType(DOCUMENT_TYPES.CURRICULUM)
    .filter(
        (typeof props.id !== 'undefined' && `_id == ${props.id}`)
        || ''
    )
    .project(curriculumProjection)
    .slice(0)

type CurriculumQueryResult = InferResultItem<typeof builder>

const { data } = useSanityQuery<CurriculumQueryResult>(builder.query)
</script>

<template>
    <slot :curriculum="data"></slot>
</template>
