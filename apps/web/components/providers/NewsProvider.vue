<script setup lang="ts">
import { createNewsFragment, createNewsTagFragment, DOCUMENT_TYPES } from '@kvantoriumvlz/shared';
import type { InferResultType } from 'groqd';
import { q } from '~/assets/typescript/groqd.client';

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
        ...createNewsFragment(q),
        tags: sub.field('tags[]').deref().project(createNewsTagFragment(q))
    }))
    .slice(0)

type NewsQueryResult = InferResultType<typeof builder>

const { data } = await useSanityQuery<NewsQueryResult>(builder.query)
</script>

<template>
    <slot :news="data"></slot>
</template>
