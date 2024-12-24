import groq from "groq"
import { DOCUMENT_TYPES } from "../constants.js"

export const newsTagDocumentsQueryFilterFragment = groq`_type == '${DOCUMENT_TYPES.NEWS_TAG}'`

export const newsTagFieldsQueryFragment = groq`
    _id,
    _type,
    name,
`

export type NewsTagQueryResult = {
    _id: string
    _type: typeof DOCUMENT_TYPES.NEWS_TAG
    _name: string,
}
