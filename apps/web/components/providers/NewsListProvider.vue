<script setup lang="ts">
import type { News } from '~/assets/typescript/types'

const props = defineProps<{
    fromDate?: Date
    tag?: string
}>()

const isFromDateFiltering = computed(() => typeof props.fromDate !== 'undefined')
const isTagFiltering = computed(() => typeof props.tag !== 'undefined')

const fromDateFilter = groq`publishDate > $fromDate`
const tagFilter = groq`$tag in tags[]->name`

const query = groq`
    *[
        _type == 'kvantorium.news' && (
            ${isFromDateFiltering.value ? fromDateFilter : true}
            && ${isTagFiltering.value ? tagFilter : true}
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
    fromDate: props.fromDate || new Date(),
    tag: props.tag || ''
})
</script>

<template>
    <slot :news="data || []">
    </slot>
</template>
