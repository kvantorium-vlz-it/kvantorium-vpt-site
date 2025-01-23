import { createFragmentFactory } from "@/utils"
import { DOCUMENT_TYPES } from "@kvantoriumvlz/shared"
import { InferFragmentType } from "groqd"
import { imageAssetFragmentFactory, imageCropFragmentFactory } from "./image"
import { PortableTextFragment, portableTextRawFragment } from "./raw/portableText"

export const newsFragmentFactory = createFragmentFactory((q) => q
    .fragmentForType<typeof DOCUMENT_TYPES.NEWS>()
    .project((sub) => ({
        _id: true,
        _type: true,
        title: true,
        publishDate: true,
        slug: sub.field('slug').field('current'),
        previewImage: sub.field('previewImage').project((sub) => ({
            _type: true,
            asset: sub.field('asset').deref().project(imageAssetFragmentFactory(q)),
            crop: sub.field('crop').project(imageCropFragmentFactory(q)),
        })),
        tags: sub.field('tags[]').deref().project({
            name: true,
            _id: true,
            _type: true,
        }),
        gallery: sub.field('gallery[]').project((sub) => ({
            _type: true,
            _key: true,
            asset: sub.field('asset').deref().project(imageAssetFragmentFactory(q)),
            crop: sub.field('crop').project(imageCropFragmentFactory(q)),
        })),
        content: sub
            .field('content[]')
            .raw<PortableTextFragment[]>((`{${portableTextRawFragment}}`)),
    }))
)

export type NewsFragment = InferFragmentType<ReturnType<typeof newsFragmentFactory>>
