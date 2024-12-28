<script setup lang="ts">
import { kvantumQueryFieldsFragment, kvantumQueryFilterFragment, type KvantumQueryResult } from '@kvantoriumvlz/shared/queries';
import type { Kvantum } from '~/assets/typescript/types'

const props = defineProps<{
    offset?: number
    count?: number
}>()

const isCountFiltering = computed(() => typeof props.count !== 'undefined')

const countFilter = groq`[$offset...$count + $offset]`

const query = groq`
    *[${kvantumQueryFilterFragment} ${isCountFiltering.value ? countFilter : ''}] {
        ${kvantumQueryFieldsFragment}
    }
`
const {
    data,
} = await useSanityQuery<KvantumQueryResult[]>(query, {
    count: props.count || 0,
    offset: props.offset || 0,
})
</script>

<template>
    <slot :kvantums="data ?? []"></slot>
</template>
