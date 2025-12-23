<script setup lang="ts">
import type { PortableTextComponentProps } from '@portabletext/vue'
import imageUrlBuilder from '@sanity/image-url'
import type { ImageAssetResult, ImageCropResult } from '@kvantoriumvlz/shared'
import type { SanityClientLike } from '@sanity/image-url/lib/types/types'

const urlFor = (image: string) => imageUrlBuilder(useSanity().config as SanityClientLike).image(image)
const props = defineProps<PortableTextComponentProps<{
    _type: string
    _key: string
    asset: ImageAssetResult
    crop: ImageCropResult
}>>()

const dimensions = props.value.asset.dimensions!

const crop = computed(() => ({
    left: props.value.crop?.left || 0,
    right: props.value.crop?.right || 0,
    top: props.value.crop?.top || 0,
    bottom: props.value.crop?.bottom || 0,
}))

const croppedWidth = Math.ceil(dimensions.width! * (1 - (crop.value.right + crop.value.left)))
const croppedHeight = Math.ceil(dimensions.height! * (1 - (crop.value.top + crop.value.bottom)))
const left = Math.ceil(dimensions.width! * crop.value.left)
const top = Math.ceil(dimensions.height! * crop.value.top)

const url = urlFor(props.value.asset._id)
    .rect(left, top, croppedWidth, croppedHeight)
    .url()
</script>

<template>
    <img class="block w-full rounded-xl my-4" :src="url">
</template>
