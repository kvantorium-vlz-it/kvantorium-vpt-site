<script setup lang="ts">
import type { Kvantum } from '~/assets/typescript/types'

const query = groq`*[_type == 'kvantorium.kvantum'] {
    ...,
    "icon": icon.asset->url,
    "slug": slug.current,
}`

const {
    data,
} = await useSanityQuery<Kvantum[]>(query)
</script>

<template>
    <slot :kvantums="data ?? []"></slot>
</template>
