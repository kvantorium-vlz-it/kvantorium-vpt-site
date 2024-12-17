<script setup lang="ts">
import type { News } from '~/assets/typescript/types'

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
        _type == 'kvantorium.news'
        && (
            slug.current == $slug
            || _id == $id
            || title == $title
        )
    ] {
        publishDate,
        'tags': tags[]-> {
            _id,
            name,
        },
        'gallery': gallery[].asset -> {
            'src': url,
            'alt': altText,
        },
        title,
        'slug': slug.current,
        _id,
        content,
        'previewImage': previewImage.asset -> {
            'src': url,
            'alt': altText,
        },
    }
`

const { data } = await useSanityQuery<News[]>(query, {
    slug: props.slug,
    id: props.id,
    title: props.title,
})
</script>

<template>
    <slot :news="data?.length > 0 ? data?.[0] : null"></slot>
</template>
