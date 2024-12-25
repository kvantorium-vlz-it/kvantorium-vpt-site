import groq from "groq"

const imageDimensionsQueryFieldsFragment = groq`
    width,
    height,
    aspectRatio
`

type ImageDimensionsQueryResult = {
    width: number
    height: number
    aspectRatio: number
}

const imageAssetQueryFieldsFragment = groq`
    title,
    description,
    'alt': altText,
    'src': url,
    'dimensions': metadata.dimensions {
        ${imageDimensionsQueryFieldsFragment},
    }
`

type ImageAssetQueryResult = {
    title: string | null
    description: string | null
    alt: string | null
    src: string
    dimensions: ImageDimensionsQueryResult
}

const imageCropQueryFieldsFragment = groq`
    top,
    left,
    right,
    bottom
`

type ImageCropQueryResult = {
    top: number
    left: number
    bottom: number
    right: number
}

export const imageQueryFieldsFragment = groq`
    _type,
    _key,
    '_ref': asset._ref,
    'crop': crop {
        ${imageCropQueryFieldsFragment},
    },
    ...asset-> {
        ${imageAssetQueryFieldsFragment},
    }
`

export type ImageQueryResult = {
    _type: string
    _key: string | null
    _ref: string
    crop: ImageCropQueryResult | null
} & ImageAssetQueryResult
