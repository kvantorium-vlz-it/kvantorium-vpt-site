<script setup lang="ts">
import type { Kvantum } from '~/assets/typescript/types'

const query = groq`
    *[_type == 'kvantorium.kvantum'] {
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
} = await useSanityQuery<Kvantum[]>(query)
</script>

<template>
    <slot :kvantums="data ?? []"></slot>
</template>
