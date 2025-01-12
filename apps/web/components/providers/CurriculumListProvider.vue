<script setup lang="ts">
import { createCurriculumFragment, DOCUMENT_TYPES } from '@kvantoriumvlz/shared';
import { q } from '~/assets/typescript/groqd.client'

const props = withDefaults(defineProps<{
    count?: number
    offset?: number
}>(), {
    offset: 0,
})

let builder = q
    .star
    .filterByType(DOCUMENT_TYPES.CURRICULUM)
    .project(createCurriculumFragment(q))

builder = typeof props.count !== 'undefined'
    ? builder.slice(props.offset, props.count + props.offset)
    : builder

const { data } = useSanityQuery(builder.query)
</script>

<template>
    <slot :curricula="data ?? []"></slot>
</template>
