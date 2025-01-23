import { createFragment } from "@/utils"
import { DOCUMENT_TYPES } from "@kvantoriumvlz/shared"
import { GroqBuilderWithZod, InferFragmentType } from "groqd"

export const createNewsTagFragment = createFragment((q) => q
    .fragmentForType<typeof DOCUMENT_TYPES.NEWS_TAG>()
    .project({
        _id: true,
        _type: true,
        name: true,
    })
)

export type NewsTagResult = InferFragmentType<ReturnType<typeof createNewsTagFragment>>
