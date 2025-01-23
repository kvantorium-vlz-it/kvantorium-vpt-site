import { createFragmentFactory } from '@/utils'
import { type InferFragmentType } from 'groqd'

export const imageAssetFragmentFactory = createFragmentFactory((q) => q
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
)

export type ImageAssetFragment = InferFragmentType<ReturnType<typeof imageAssetFragmentFactory>>

export const imageCropFragmentFactory = createFragmentFactory((q) =>q
    .fragmentForType<'sanity.imageCrop'>()
    .project({
        bottom: true,
        left: true,
        right: true,
        top: true,
    })
)

export type ImageCropFragment = InferFragmentType<ReturnType<typeof imageCropFragmentFactory>>
