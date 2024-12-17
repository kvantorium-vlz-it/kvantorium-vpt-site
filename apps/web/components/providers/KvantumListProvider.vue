<script setup lang="ts">
import type { Kvantum } from '~/assets/typescript/types'

const props = defineProps<{
    offset?: number
    count?: number
}>()

const isCountFiltering = computed(() => typeof props.count !== 'undefined')

const countFilter = groq`[$offset...$count + $offset]`

const query = groq`
    *[_type == 'kvantorium.kvantum'] ${isCountFiltering.value ? countFilter : ''} {
        "slug": slug.current,
        name,
        _id,
        "icon": icon.asset->url,
        description,
        topics,
        'minimalAge': math::min(*[
            _type == 'kvantorium.curriculum'
            && references(^._id)
        ].minimalAge)
    }
`

const {
    data,
} = await useSanityQuery<Kvantum[]>(query, {
    count: props.count || 0,
    offset: props.offset || 0,
})
</script>

<template>
    <slot :kvantums="data ?? []"></slot>
</template>
