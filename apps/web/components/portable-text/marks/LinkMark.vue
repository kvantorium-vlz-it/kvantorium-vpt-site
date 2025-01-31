<script setup lang="ts">
import type { PortableTextMarkComponentProps } from '@portabletext/vue'
import { DOCUMENT_TYPES } from '@kvantoriumvlz/shared'
import type { PortableTextMarkDef } from '@kvantoriumvlz/query'

const props = defineProps<PortableTextMarkComponentProps<PortableTextMarkDef>>()

const link = computed(() => {
    if (typeof props.value?.to === 'undefined' || props.value.to === null) {
        return ''
    }

    if (props.value.to._type === DOCUMENT_TYPES.EXTERNAL_LINK) {
        return props.value.to.url
    }

    if (props.value.to._toType === DOCUMENT_TYPES.KVANTUM) {
        return `/kvantums/${props.value.to.slug}`
    } else if (props.value.to._toType === DOCUMENT_TYPES.NEWS) {
        return `/news/${props.value.to.slug}`
    }

    return undefined
})
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
