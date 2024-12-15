<script setup lang="ts">
import type { News } from '~/assets/typescript/types'

const query = groq`
    *[_type == 'kvantorium.news'] {
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

const { data } = await useSanityQuery<News[]>(query)

console.log(data)
</script>

<template>
    <slot :news="data || []">
    </slot>
</template>
