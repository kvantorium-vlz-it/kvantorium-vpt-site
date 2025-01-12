<script setup lang="ts">
import { createCurriculumFragment, DOCUMENT_TYPES } from '@kvantoriumvlz/shared';
import { q } from '~/assets/typescript/groqd.client';
import type { InferResultItem } from 'groqd'

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
    .project(createCurriculumFragment(q))
    .slice(0)

type CurriculumQueryResult = InferResultItem<typeof builder>

const { data } = useSanityQuery<CurriculumQueryResult>(builder.query)
</script>

<template>
    <slot :curriculum="data"></slot>
</template>
