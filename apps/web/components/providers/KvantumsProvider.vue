<script setup lang="ts">
import type { Kvantum } from '~/assets/typescript/types'

const query = groq`*[_type == 'kvantum'] {
    ...,
    'slug': slug.current,
    'icon': icon.image.asset->url
}`

const {
    data,
} = await useSanityQuery<Kvantum[]>(query)
</script>

<template>
    <slot :kvantums="data ?? []"></slot>
</template>
