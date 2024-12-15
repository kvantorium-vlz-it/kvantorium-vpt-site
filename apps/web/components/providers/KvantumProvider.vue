<script setup lang="ts">
import type { Kvantum } from '~/assets/typescript/types'

const props =withDefaults(defineProps<{
    id?: string
    name?: string
    slug?: string
}>(), {
    id: '',
    name: '',
    slug: '',
})

const query = groq`
*[
    _type == 'kvantum'
    && (
        slug.current == $slug
        || name == $name
        || _id == $id
    )
] {
    ...,
    'slug': slug.current,
    'icon': icon.image.asset->url
}`

const { data } = await useSanityQuery<Kvantum[]>(query, {
    slug: props.slug,
    name: props.name,
    id: props.id,
})
</script>

<template>
    <slot :kvantum="data?.length > 0 ? data?.[0] : null"></slot>
</template>
