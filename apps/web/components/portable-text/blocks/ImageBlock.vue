<script setup lang="ts">
import type { PortableTextComponentProps } from '@portabletext/vue'
import imageUrlBuilder from '@sanity/image-url'
import { getImageDimensions } from '@sanity/asset-utils'
import type { SanityClientLike } from '@sanity/image-url/lib/types/types'

const urlFor = (image: string) => imageUrlBuilder(useSanity().config as SanityClientLike).image(image)

interface ImageCrop {
    top: number
    left: number
    bottom: number
    right: number
}

const props = defineProps<PortableTextComponentProps<{
    _type: string
    _key: string
    _ref: string
    crop: ImageCrop | null
    description: string | null
    title: string | null
    alt: string | null
    src: string
}>>()

const { height, width } = getImageDimensions(props.value._ref)

const crop = computed(() => ({
    left: props.value.crop?.left || 0,
    right: props.value.crop?.right || 0,
    top: props.value.crop?.top || 0,
    bottom: props.value.crop?.bottom || 0,
}))

const isCropped = computed(() => props.value.crop !== null)

const croppedWidth = Math.floor(width * (1 - (crop.value.right + crop.value.left)))
const croppedHeight = Math.floor(width * (1 - (crop.value.top + crop.value.bottom)))
const left = Math.floor(width * crop.value.left)
const top = Math.floor(height * crop.value.top)

const url = (isCropped.value
    ? urlFor(props.value._ref).rect(left, top, croppedWidth, croppedHeight)
    : urlFor(props.value._ref)
).url()
</script>

<template>
    <img class="block w-full rounded-xl my-4" :src="url">
</template>
