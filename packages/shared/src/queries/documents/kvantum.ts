import groq from "groq"
import { DOCUMENT_TYPES } from "../../constants.js"
import { imageQueryFieldsFragment, ImageQueryResult } from "../common/image.js"
import { portableTextQueryFieldsFragment, PortableTextQueryResult } from "../common/portableText.js"

export const kvantumQueryFilterFragment = groq`_type == '${DOCUMENT_TYPES.KVANTUM}'`

export const kvantumQueryFieldsFragment = groq`
    _id,
    _type,
    name,
    'slug': slug.current,
    icon {
        ${imageQueryFieldsFragment},
    },
    description[] {
        ${portableTextQueryFieldsFragment},
    },
    topics
`

export type KvantumQueryResult = {
    _id: string
    _type: string
    name: string
    slug: string
    icon: ImageQueryResult
    description: PortableTextQueryResult
    topics: string[]
}
