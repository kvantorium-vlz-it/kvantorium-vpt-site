<script setup lang="ts">
import type { PortableTextMarkComponentProps } from '@portabletext/vue'
import { DOCUMENT_TYPES } from '@kvantoriumvlz/shared'
import type { PortableTextMarkDef } from '@kvantoriumvlz/query'

const props = defineProps<PortableTextMarkComponentProps<PortableTextMarkDef>>()

const link = computed(() => {
    if (typeof props.value?.to === 'undefined' || props.value.to === null) {
        return undefined
    }

    if (typeof props.value.to === 'string') {
        return props.value.to
    }

    if (props.value.to._type === DOCUMENT_TYPES.KVANTUM) {
        return `/kvantums/${props.value.to.slug}`
    } else if (props.value.to._type === DOCUMENT_TYPES.NEWS) {
        return `/news/${props.value.to.slug}`
    }

    return undefined
})
</script>

<template>
    <NuxtLink
        :to="link"
        :target="value?.isOpenNewWindow ? '_blank' : '_self'"
        class="text-secondary hover:underline"
    >
        <slot></slot>
    </NuxtLink>
</template>
