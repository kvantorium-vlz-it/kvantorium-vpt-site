<script setup lang="ts">
import type { News } from '~/assets/typescript/types'
import { type NewsQueryResult, newsQueryFilterFragment, newsQueryFieldsFragment } from '@kvantoriumvlz/shared/queries'

interface Props {
    title?: string
    slug?: string
    id?: string
}

const props = withDefaults(defineProps<Props>(), {
    id: '',
    slug: '',
    title: '',
})

const query = groq`
    *[
        ${newsQueryFilterFragment}
        && (
            slug.current == $slug
            || _id == $id
            || title == $title
        )
    ] {
        ${newsQueryFieldsFragment}
    }
`

const { data } = await useSanityQuery<NewsQueryResult[]>(query, {
    slug: props.slug,
    id: props.id,
    title: props.title,
})
</script>

<template>
    <slot :news="data?.length > 0 ? data?.[0] : null"></slot>
</template>
