import groq from "groq"
import { DOCUMENT_TYPES } from "../../constants.js"

export const newsTagQueryFilterFragment = groq`_type == '${DOCUMENT_TYPES.NEWS_TAG}'`

export const newsTagQueryFieldsFragment = groq`
    _id,
    _type,
    name
`

export type NewsTagQueryResult = {
    _id: string
    _type: typeof DOCUMENT_TYPES.NEWS_TAG
    name: string,
}
