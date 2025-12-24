<script setup lang="ts">
import { DOCUMENT_TYPES } from '@kvantoriumvlz/shared'
import type { InferResultType } from 'groqd'
import { q, kvantumProjection } from '#shared/sanity'

const props = withDefaults(defineProps<{
    offset?: number
    count?: number
}>(), {
    offset: 0,
})

let builder = q
    .star
    .filterByType(DOCUMENT_TYPES.KVANTUM)
    .project(kvantumProjection)

builder = typeof props.count !== 'undefined'
    ? builder.slice(props.offset, props.count + props.offset)
    : builder

type KvantumQueryResult = InferResultType<typeof builder>

const { data } = await useSanityQuery<KvantumQueryResult>(builder.query)
</script>

<template>
    <slot :kvantums="data ?? []"></slot>
</template>
