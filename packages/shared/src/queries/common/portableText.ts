import groq from "groq"
import { DOCUMENT_TYPES } from "../../constants.js"
import { imageQueryFieldsFragment, ImageQueryResult } from "./image.js"
import { linkAnnotationQueryFieldsFragment, linkAnnotationQueryFilterFragment, LinkAnnotationQueryResult } from "./linkAnnotation.js"

export type PortableTextBlockMarkDefsQueryResult = LinkAnnotationQueryResult

const portableTextBlockMemberQueryFilterFragment = groq`_type == 'block'`

export type PortableTextBlockChildrenQueryResult = {
    text: string
    _key: string
    _type: 'span'
    marks: ('strong' | 'underline' | 'em')[]
}

type PortableTextBlockStyles = | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'normal'

export type PortableTextBlockQueryResult = {
    _type: 'block'
    _key: string
    style: PortableTextBlockStyles
    children: PortableTextBlockChildrenQueryResult[]
    markDefs: PortableTextBlockMarkDefsQueryResult[]
}

export type PortableTextImageQueryResult = ImageQueryResult

export type PortableTextQueryResult =
    | PortableTextBlockQueryResult
    | PortableTextImageQueryResult

const portableTextImageMemberQueryFilterFragment = groq`_type == 'image'`

export const portableTextQueryFieldsFragment = groq`
    _type,
    _key,
    ${portableTextBlockMemberQueryFilterFragment} => {
        markDefs,
        style,
        children[] {
            _type,
            _key,
            marks,
            text,
        }
    },
    ${portableTextImageMemberQueryFilterFragment} => {
        ${imageQueryFieldsFragment},
    },
    markDefs [] {
        ${linkAnnotationQueryFilterFragment} => {
            ${linkAnnotationQueryFieldsFragment}
        }
    }
`
