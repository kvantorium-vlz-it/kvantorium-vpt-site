<script setup lang="ts">
import type { KvantumQueryResult } from '@kvantoriumvlz/shared/queries'
import {
    kvantumQueryFieldsFragment,
    kvantumQueryFilterFragment,
} from '@kvantoriumvlz/shared/queries'

const props =withDefaults(defineProps<{
    id?: string
    name?: string
    slug?: string
}>(), {
    id: '',
    name: '',
    slug: '',
})


const query = groq`*[
    ${kvantumQueryFilterFragment}
    && (
        slug.current == $slug
        || name == $name
        || _id == $id
    )
] {
    ${kvantumQueryFieldsFragment}
}`

const { data } = await useSanityQuery<KvantumQueryResult[]>(query, {
    slug: props.slug,
    name: props.name,
    id: props.id,
})

console.log(data)
</script>

<template>
    <slot :kvantum="data?.length > 0 ? data?.[0] : null"></slot>
</template>
