<script setup lang="ts">
import { DOCUMENT_TYPES } from '@kvantoriumvlz/shared';
import type { InferResultType } from 'groqd'
import { q, newsProjection, newsTagProjection } from '#shared/sanity';

const props = withDefaults(defineProps<{
    count?: number
    offset?: number
}>(), {
    offset: 0,
})

let builder = q
    .star
    .filterByType(DOCUMENT_TYPES.NEWS)
    .project((sub) => ({
        ...newsProjection,
        tags: sub.field('tags[]').deref().project(newsTagProjection)
    }))

builder = typeof props.count !== 'undefined'
    ? builder.slice(props.offset, props.count + props.offset)
    : builder

type NewsQueryResult = InferResultType<typeof builder>

const { data } = await useSanityQuery<NewsQueryResult[]>(builder.query)
</script>

<template>
    <slot :news="data ?? []"></slot>
</template>
