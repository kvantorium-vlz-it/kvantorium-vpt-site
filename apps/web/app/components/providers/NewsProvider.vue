<script setup lang="ts">
import { DOCUMENT_TYPES } from '@kvantoriumvlz/shared';
import type { InferResultType } from 'groqd';
import { newsProjection, newsTagProjection, q } from '#shared/sanity';

const props = defineProps<{
    slug?: string
    id?: string
}>()

let builder = q
    .star
    .filterByType(DOCUMENT_TYPES.NEWS)
    .filter(
        (typeof props.id !== 'undefined' && `_id == ${props.id}`)
        || (typeof props.slug !== 'undefined' && `slug.current == ${props.slug}`)
        || ''
    )
    .project((sub) => ({
        ...newsProjection,
        tags: sub.field('tags[]').deref().project(newsTagProjection)
    }))
    .slice(0)

type NewsQueryResult = InferResultType<typeof builder>

const { data } = await useSanityQuery<NewsQueryResult>(builder.query)
</script>

<template>
    <slot :news="data"></slot>
</template>
