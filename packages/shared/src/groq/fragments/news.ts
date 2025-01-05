import { DOCUMENT_TYPES } from "@constants"
import { q } from "@/groq/groqd.client.ts"
import { imageAssetFragment, imageCropFragment } from "./image.ts"
import { InferFragmentType } from "groqd"
import { portableTextProjection, PortableTextResult } from "./raw/portableText.ts"

export const newsFragment = q
    .fragmentForType<typeof DOCUMENT_TYPES.NEWS>()
    .project((sub) => ({
        _id: true,
        _type: true,
        title: true,
        publishDate: true,
        slug: sub.field('slug').field('current'),
        previewImage: sub.field('previewImage').project((sub) => ({
            _type: true,
            asset: sub.field('asset').deref().project(imageAssetFragment),
            crop: sub.field('crop').project(imageCropFragment),
        })),
        tags: sub.field('tags[]').deref().project({
            name: true,
            _id: true,
            _type: true,
        }),
        gallery: sub.field('gallery[]').project((sub) => ({
            _type: true,
            _key: true,
            asset: sub.field('asset').deref().project(imageAssetFragment),
            crop: sub.field('crop').project(imageCropFragment),
        })),
        content: sub
            .field('content[]')
            .raw<PortableTextResult[]>(portableTextProjection),
    }))

export type NewsResult = InferFragmentType<typeof newsFragment>
