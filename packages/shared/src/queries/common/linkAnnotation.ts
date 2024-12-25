import groq from "groq"
import { DOCUMENT_TYPES, LINK_TYPE } from "../../constants.js"

export const linkAnnotationQueryFilterFragment = groq`_type == 'link'`

const linkAnnotationCommonQueryFieldsFragment = groq`
    _type,
    _key,
    isOpenNewTab,
    linkType
`

type LinkAnnotation = {
    _type: 'link'
    _key: string
    isOpenNewTab: boolean
    linkType: typeof LINK_TYPE[keyof typeof LINK_TYPE]
}

const linkAnnotationExternalQueryFilterFragment = groq`linkType == ${LINK_TYPE.EXTERNAL}`

const linkAnnotationExternalQueryFieldsFragment = groq`
    external
`

type ExternalLinkAnnotation = {
    external: string
    linkType: typeof LINK_TYPE.EXTERNAL
} & LinkAnnotation

const linkAnnotationInternalQueryFilterFragment = groq`linkType == ${LINK_TYPE.INTERNAL}`

const linkAnnotationInternalQueryFieldsFragment = groq`
    'internal': internal -> {
        _type,
        'slug': slug.current,
        _id,
    }
`

type InternalLinkAnnotation = {
    internal: {
        _type: typeof DOCUMENT_TYPES.KVANTUM | typeof DOCUMENT_TYPES.NEWS
        slug: string
        _id: string
    }
    linkType: typeof LINK_TYPE.INTERNAL
} & LinkAnnotation

export const linkAnnotationQueryFieldsFragment = groq`
    ${linkAnnotationCommonQueryFieldsFragment},
    ${linkAnnotationExternalQueryFilterFragment} => {
        ${linkAnnotationExternalQueryFieldsFragment},
    },
    ${linkAnnotationInternalQueryFilterFragment} => {
        ${linkAnnotationInternalQueryFieldsFragment},
    }
`

export type LinkAnnotationQueryResult = InternalLinkAnnotation | ExternalLinkAnnotation
