import { q } from "@/query-builder/groqd.client.ts"
import { type InferFragmentType } from 'groqd'

export const imageAssetFragment = q
    .fragmentForType<'sanity.imageAsset'>()
    .project((sub) => ({
        alt: sub.field('altText'),
        title: true,
        description: true,
        src: sub.field('url'),
        _id: true,
        dimensions: sub.field('metadata').field('dimensions').project({
            aspectRatio: true,
            height: true,
            width: true,
        })
    }))

export type ImageAssetResult = InferFragmentType<typeof imageAssetFragment>

export const imageCropFragment = q
    .fragmentForType<'sanity.imageCrop'>()
    .project({
        bottom: true,
        left: true,
        right: true,
        top: true,
    })

export type ImageCropResult = InferFragmentType<typeof imageCropFragment>
