import { DOCUMENT_TYPES } from "@kvantoriumvlz/shared"
import { InferFragmentType } from "groqd"
import { portableTextProjection, PortableTextResult } from "./raw/portableText.ts"
import { createImageAssetFragment, createImageCropFragment } from "./image.ts"
import { createFragment } from "@/utils.ts"

export const createNewsFragment = createFragment((q) => q
    .fragmentForType<typeof DOCUMENT_TYPES.NEWS>()
    .project((sub) => ({
        _id: true,
        _type: true,
        title: true,
        publishDate: true,
        slug: sub.field('slug').field('current'),
        previewImage: sub.field('previewImage').project((sub) => ({
            _type: true,
            asset: sub.field('asset').deref().project(createImageAssetFragment(q)),
            crop: sub.field('crop').project(createImageCropFragment(q)),
        })),
        tags: sub.field('tags[]').deref().project({
            name: true,
            _id: true,
            _type: true,
        }),
        gallery: sub.field('gallery[]').project((sub) => ({
            _type: true,
            _key: true,
            asset: sub.field('asset').deref().project(createImageAssetFragment(q)),
            crop: sub.field('crop').project(createImageCropFragment(q)),
        })),
        content: sub
            .field('content[]')
            .raw<PortableTextResult[]>((`{${portableTextProjection}}`)),
    }))
)

export type NewsResult = InferFragmentType<ReturnType<typeof createNewsFragment>>
