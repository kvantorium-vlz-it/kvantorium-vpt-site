import { DOCUMENT_TYPES } from "@constants"
import { q } from "@/query-builder/groqd.client.ts"
import { InferFragmentType } from "groqd"

export const newsTagFragment = q
    .fragmentForType<typeof DOCUMENT_TYPES.NEWS_TAG>()
    .project({
        _id: true,
        _type: true,
        name: true,
    })

export type NewsTagResult = InferFragmentType<typeof newsTagFragment>
