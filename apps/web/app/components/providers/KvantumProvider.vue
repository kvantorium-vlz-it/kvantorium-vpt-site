<script setup lang="ts">
import { createKvantumFragment, DOCUMENT_TYPES, q } from '@kvantoriumvlz/shared'
import type { InferResultItem } from 'groqd'

const props = defineProps<{
    id?: string
    slug?: string
}>()

let builder = q
    .star
    .filterByType(DOCUMENT_TYPES.KVANTUM)
    .filter(
        (typeof props.id !== 'undefined' && `_id == ${props.id}`)
        || (typeof props.slug !== 'undefined' && `slug.current == "${props.slug}"`)
        || ''
    )
    .project(createKvantumFragment(q))
    .slice(0)

type KvantumQueryResult = InferResultItem<typeof builder>

const { data } = await useSanityQuery<KvantumQueryResult>(builder.query)
</script>

<template>
    <slot :kvantum="data"></slot>
</template>
