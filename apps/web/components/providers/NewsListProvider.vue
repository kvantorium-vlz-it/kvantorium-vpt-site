<script setup lang="ts">
import { newsQueryFieldsFragment, newsQueryFilterFragment, type NewsQueryResult } from '@kvantoriumvlz/shared/queries';
import type { News } from '~/assets/typescript/types'
import { dateToSanityDate } from '~/assets/typescript/utils'

const props = withDefaults(defineProps<{
    fromDate?: Date
    toDate?: Date
    date?: Date
    tag?: string
    count?: number
    offset?: number
}>(), {
    offset: 0,
})

const isFromDateFiltering = computed(() => typeof props.fromDate !== 'undefined')
const isToDateFiltering = computed(() => typeof props.toDate !== 'undefined')
const dateFiltering = computed(() => typeof props.date !== 'undefined')
const isTagFiltering = computed(() => typeof props.tag !== 'undefined')
const isCountFiltering = computed(() => typeof props.count !== 'undefined')

const fromDateFilter = groq`$fromDate < publishDate`
const toDateFilter = groq`$toDate > publishDate`
const dateFilter = groq`$date == publishDate`
const tagFilter = groq`$tag in tags[]->name`
const countFilter = groq`[$offset...$count + $offset]`

const query = groq`
    *[
        ${newsQueryFilterFragment} && (
            ${isFromDateFiltering.value ? fromDateFilter : true}
            && ${isToDateFiltering.value ? toDateFilter : true}
            && ${dateFiltering.value ? dateFilter : true}
            && ${isTagFiltering.value ? tagFilter : true}
        )
    ] | order(publishDate desc) ${isCountFiltering.value ? countFilter : ''} {
        ${newsQueryFieldsFragment}
    }
`

const { data } = await useSanityQuery<NewsQueryResult[]>(query, {
    fromDate: dateToSanityDate(props.fromDate || new Date()),
    toDate: dateToSanityDate(props.toDate || new Date()),
    date: dateToSanityDate(props.date || new Date()),
    tag: props.tag || '',
    count: props.count || 0,
    offset: props.offset || 0,
})
</script>

<template>
    <slot :news="data || []"></slot>
</template>
