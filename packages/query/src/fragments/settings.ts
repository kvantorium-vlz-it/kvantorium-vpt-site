import { createFragmentFactory } from "@/utils"
import { DOCUMENT_TYPES } from "@kvantoriumvlz/shared"
import { InferFragmentType } from "groqd"
import { PortableTextFragment, portableTextRawFragment } from "./raw/portableText"
import { fileAssetFragmentFactory } from "./file"
import { Builder } from "@/groqd.client"

export const settingsFragmentFactory = (q: Builder) => q
    .fragmentForType<typeof DOCUMENT_TYPES.SETTINGS>()
    .project((sub) => ({
        about: sub
            .field('about[]')
            .raw<PortableTextFragment[]>(`{${portableTextRawFragment}}`),
        documents: sub.field('documents[]').project((sub) => ({
            _type: true,
            file: sub.field('file').project((sub) => ({
                asset: sub.field('asset').deref().project(fileAssetFragmentFactory(q)),
            })),
            label: true,
        }))
    }))

export type SettingsFragment = InferFragmentType<ReturnType<typeof settingsFragmentFactory>>
