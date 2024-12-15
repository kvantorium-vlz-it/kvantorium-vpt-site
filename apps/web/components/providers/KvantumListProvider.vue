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
    }
`

const {
    data,
} = await useSanityQuery<Kvantum[]>(query)
</script>

<template>
    <slot :kvantums="data ?? []"></slot>
</template>
