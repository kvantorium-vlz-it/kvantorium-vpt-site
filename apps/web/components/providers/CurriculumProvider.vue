<script setup lang="ts">
import { curriculumQueryFieldsFragment, curriculumQueryFilterFragment } from '@kvantoriumvlz/shared';

const props = defineProps<{
    id?: string
}>()

const query = groq`
    *[
        ${curriculumQueryFilterFragment}
        && _id == $id
    ] {
        ${curriculumQueryFieldsFragment}
    }
`

const { data } = useSanityQuery(query, {
    id: props.id,
})
</script>

<template>
    <slot></slot>
</template>
