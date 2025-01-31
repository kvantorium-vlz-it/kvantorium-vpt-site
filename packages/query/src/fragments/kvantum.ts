import { createFragmentFactory } from "@/utils"
import { DOCUMENT_TYPES } from "@kvantoriumvlz/shared"
import { InferFragmentType } from "groqd"
import { imageAssetFragmentFactory, imageCropFragmentFactory } from "./image"
import { PortableTextFragment, portableTextRawFragment } from "./raw/portableText"

export const kvantumFragmentFactory = createFragmentFactory((q) => q
    .fragmentForType<typeof DOCUMENT_TYPES.KVANTUM>()
    .project((sub) => ({
        _id: true,
        _type: true,
        name: true,
        slug: sub.field('slug').field('current'),
        topics: true,
        icon: sub.field('icon').project((sub) => ({
            _type: true,
            asset: sub.field('asset').deref().project(imageAssetFragmentFactory(q)),
            crop: sub.field('crop').project(imageCropFragmentFactory(q)),
        })),
        description: sub
            .field('description[]')
            .raw<PortableTextFragment[]>(`{${portableTextRawFragment}}`),
        'minimalAge': sub
            .star
            .filterByType(DOCUMENT_TYPES.CURRICULUM)
            .filter('references(^._id)')
            .order('minimalAge asc')
            .slice(0)
            .project((sub) => ({ minimalAge: true }))
            .field('minimalAge')
    }))
)

export type KvantumFragment = InferFragmentType<ReturnType<typeof kvantumFragmentFactory>>
