<script setup lang="ts">
import type { PortableTextComponentProps } from '@portabletext/vue'
import imageUrlBuilder from '@sanity/image-url'
import type { SanityClientLike } from '@sanity/image-url/lib/types/types'

const urlFor = (image: string) => imageUrlBuilder(useSanity().config as SanityClientLike).image(image)

interface ImageCrop {
    top: number
    left: number
    bottom: number
    right: number
}

interface ImageDimensions {
    width: number
    height: number
    aspectRatio: number
}

const props = defineProps<PortableTextComponentProps<{
    _type: string
    _key: string
    _ref: string
    src: string
    dimensions: ImageDimensions
    crop: ImageCrop | null
    description: string | null
    title: string | null
    alt: string | null
}>>()

const { width, height } = props.value.dimensions

const crop = computed(() => ({
    left: props.value.crop?.left || 0,
    right: props.value.crop?.right || 0,
    top: props.value.crop?.top || 0,
    bottom: props.value.crop?.bottom || 0,
}))

const croppedWidth = Math.ceil(width * (1 - (crop.value.right + crop.value.left)))
const croppedHeight = Math.ceil(height * (1 - (crop.value.top + crop.value.bottom)))
const left = Math.ceil(width * crop.value.left)
const top = Math.ceil(height * crop.value.top)

const url = urlFor(props.value._ref)
    .rect(left, top, croppedWidth, croppedHeight)
    .url()
</script>

<template>
    <img class="block w-full rounded-xl my-4" :src="url">
</template>
