<!-- TODO: fix fetching link data every opening hover card -->

<script setup lang="ts">
import type { PortableTextMarkComponentProps } from '@portabletext/vue'
import { DOCUMENT_TYPES, type PortableTextResult } from '@kvantoriumvlz/shared'

type LinkMark = NonNullable<Extract<PortableTextResult, { _type: 'block' }>['markDefs']>[number]

const props = defineProps<PortableTextMarkComponentProps<LinkMark>>()

const link = computed(() => {
    if (typeof props.value?.to === 'undefined' || props.value.to === null) {
        return ''
    }

    if ('url' in props.value.to && props.value.to.url !== null) {
        return props.value.to.url
    }

    if ('slug' in props.value.to) {
        if (props.value.to._type === DOCUMENT_TYPES.KVANTUM) {
            return `/kvantum/${props.value.to.slug}`
        } else if (props.value.to._type === DOCUMENT_TYPES.NEWS) {
            return `/news/${props.value.to.slug}`
        }
    }

    return undefined
})

console.log(link)
</script>

<template>
    <NuxtLink
        :to="link"
        :target="value?.isOpenNewTab ? '_blank' : '_self'"
        class="text-blue-800 hover:underline"
    >
        <slot></slot>
    </NuxtLink>
</template>
