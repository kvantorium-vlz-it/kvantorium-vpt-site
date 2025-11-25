import { Builder, q } from '@/groqd.client'
import { type InferFragmentType } from 'groqd'

export const imageAssetFragmentFactory = (q: Builder) => q
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

export type ImageAssetFragment = InferFragmentType<typeof imageAssetFragmentFactory>

export const imageCropFragmentFactory = (q: Builder) => q
    .fragmentForType<'sanity.imageCrop'>()
    .project({
        bottom: true,
        left: true,
        right: true,
        top: true,
    })

export type ImageCropFragment = InferFragmentType<typeof imageCropFragmentFactory>
