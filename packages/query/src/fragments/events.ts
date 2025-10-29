import { createFragmentFactory } from "@/utils";
import { DOCUMENT_TYPES } from "@kvantoriumvlz/shared";
import { imageAssetFragmentFactory, imageCropFragmentFactory } from "./image";
import { portableTextRawFragment } from "./raw/portableText";
import { PortableTextFragment } from "../../dist";
import { InferFragmentType } from "groqd";


export const eventFragmentFactory = createFragmentFactory((q) => q
    .fragmentForType<typeof DOCUMENT_TYPES.EVENTS>()
    .project((sub) => ({
        _id: true,
        _type: true,
        name: true,
        slug: true,
        previewImage: sub.field('previewImage').project((sub) => ({
            _type: true,
            asset: sub.field('asset').deref().project(imageAssetFragmentFactory(q)),
            crop: sub.field('crop').project(imageCropFragmentFactory(q)),
        })),
        eventSteps: sub.field('eventSteps[]').project((sub) => ({
            step: true,
            date: true,
            description: sub
                .field('description[]')
                .raw<PortableTextFragment[]>(`{${portableTextRawFragment}}`),
            images: sub.field('images[]').project((sub) => ({
                _type: true,
                asset: sub.field('asset').deref().project(imageAssetFragmentFactory(q)),
                crop: sub.field('crop').project(imageCropFragmentFactory(q))
            }))
        }))
    }))
)

export type EventFragment = InferFragmentType<ReturnType<typeof eventFragmentFactory>>
