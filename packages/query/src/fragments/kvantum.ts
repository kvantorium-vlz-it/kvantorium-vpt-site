import { DOCUMENT_TYPES } from "@kvantoriumvlz/shared"
import { InferFragmentType } from "groqd"
import { createImageAssetFragment, createImageCropFragment } from "./image.ts"
import { portableTextProjection, PortableTextResult } from "./raw/portableText.ts"
import { createFragment } from "@/utils.ts"

export const createKvantumFragment = createFragment((q) => q
    .fragmentForType<typeof DOCUMENT_TYPES.KVANTUM>()
    .project((sub) => ({
        _id: true,
        _type: true,
        name: true,
        slug: sub.field('slug').field('current'),
        topics: true,
        icon: sub.field('icon').project((sub) => ({
            _type: true,
            asset: sub.field('asset').deref().project(createImageAssetFragment(q)),
            crop: sub.field('crop').project(createImageCropFragment(q)),
        })),
        description: sub
            .field('description[]')
            .raw<PortableTextResult[]>(`{${portableTextProjection}}`)
    }))
)

export type KvantumResult = InferFragmentType<ReturnType<typeof createKvantumFragment>>
