import { Builder } from "@/groqd.client"
import { createFragmentFactory } from "@/utils"
import { DOCUMENT_TYPES } from "@kvantoriumvlz/shared"
import { InferFragmentType } from "groqd"

export const newsTagFragmentFactory = (q: Builder) => q
    .fragmentForType<typeof DOCUMENT_TYPES.NEWS_TAG>()
    .project({
        _id: true,
        _type: true,
        name: true,
    })

export type NewsTagFragment = InferFragmentType<ReturnType<typeof newsTagFragmentFactory>>
