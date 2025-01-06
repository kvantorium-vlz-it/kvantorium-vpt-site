import { DOCUMENT_TYPES } from "@constants"
import { q } from "@/query-builder/groqd.client.ts"
import { InferFragmentType } from "groqd"
import { imageAssetFragment, imageCropFragment } from "./image.ts"
import { portableTextProjection, PortableTextResult } from "./raw/portableText.ts"

export const kvantumFragment = q
    .fragmentForType<typeof DOCUMENT_TYPES.KVANTUM>()
    .project((sub) => ({
        _id: true,
        _type: true,
        name: true,
        slug: sub.field('slug').field('current'),
        topics: true,
        icon: sub.field('icon').project((sub) => ({
            _type: true,
            asset: sub.field('asset').deref().project(imageAssetFragment),
            crop: sub.field('crop').project(imageCropFragment),
        })),
        description: sub
            .field('description[]')
            .raw<PortableTextResult[]>(`{${portableTextProjection}}`)
    }))

export type KvantumResult = InferFragmentType<typeof kvantumFragment>
