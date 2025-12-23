<script setup lang="ts">
import { createKvantumFragment, DOCUMENT_TYPES, q } from '@kvantoriumvlz/shared'
import type { InferResultType } from 'groqd'

const props = withDefaults(defineProps<{
    offset?: number
    count?: number
}>(), {
    offset: 0,
})

let builder = q
    .star
    .filterByType(DOCUMENT_TYPES.KVANTUM)
    .project(createKvantumFragment(q))

builder = typeof props.count !== 'undefined'
    ? builder.slice(props.offset, props.count + props.offset)
    : builder

type KvantumQueryResult = InferResultType<typeof builder>

const { data } = await useSanityQuery<KvantumQueryResult>(builder.query)
</script>

<template>
    <slot :kvantums="data ?? []"></slot>
</template>
