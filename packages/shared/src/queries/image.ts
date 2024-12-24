import groq from "groq"

const imageDimensionsFieldsQueryFragment = groq`
    width,
    height,
    aspectRatio,
`

type ImageDimensionsQueryResult = {
    width: number
    height: number
    aspectRatio: number
}

const imageAssetFieldsQueryFragment = groq`
    title,
    description,
    'alt': altText,
    'src': url,
    'dimensions': metadata.dimensions { ${imageDimensionsFieldsQueryFragment} },
`

type ImageAssetQueryResult = {
    title: string | null
    description: string | null
    alt: string | null
    src: string
    dimensions: ImageDimensionsQueryResult
}

const imageCropFieldsQueryFragment = groq`
    top,
    left,
    right,
    bottom,
`

type ImageCropQueryResult = {
    top: number
    left: number
    bottom: number
    right: number
}

export const imageFieldsQueryFragment = groq`
    _type,
    _key,
    '_ref': asset._ref,
    'crop': crop { ${imageCropFieldsQueryFragment} },
    ...asset-> { ${imageAssetFieldsQueryFragment} },
`

export type ImageQueryResult = {
    _type: string
    _key: string | null
    _ref: string
    crop: ImageCropQueryResult | null
} & ImageAssetQueryResult
