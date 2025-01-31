import groq from "groq"
import type * as SanityTypes from '@kvantoriumvlz/schema/sanity.types.ts'
import { DOCUMENT_TYPES } from "@kvantoriumvlz/shared"

export const portableTextRawFragment = groq`
    _key,
    _type == 'block' => {
        _type,
        children[] {
            marks,
            text,
            _type,
            _key,
        },
        style,
        'markDefs': markDefs[] {
            _type,
            _key,
            isOpenNewTab,
            'to': to[] {
                _type == '${DOCUMENT_TYPES.EXTERNAL_LINK}' => { url },
                _type == '${DOCUMENT_TYPES.INTERNAL_LINK}' => {
                    ...reference -> {
                        '_toType': _type,
                        _id,
                        'slug': slug.current,
                    }
                },
                _type,
            }[0]
        }
    },
    _type == 'image' => {
        crop {
            top,
            right,
            bottom,
            left,
        },
        _type,
        'asset': asset-> {
            _type,
            _id,
            title,
            description,
            'alt': altText,
            'src': url,
            'dimensions': metadata.dimensions {
                aspectRatio,
                height,
                width,
            },
        },
    },
`

type _PortableText = SanityTypes.PortableTextQueryResult[number]['description'][number]
type _PortableTextBlock = Extract<_PortableText, { _type: 'block' }>
type _PortableTextImage = Extract<_PortableText, { _type: 'image' }>

type _PortableTextMarkDefs = NonNullable<_PortableTextBlock['markDefs']>[number]
type _LinkMarkDef = Extract<_PortableTextMarkDefs, { _type: typeof DOCUMENT_TYPES.LINK }>

type _InternalLinkMarkDefTo = Extract<_LinkMarkDef['to'], { _type: typeof DOCUMENT_TYPES.INTERNAL_LINK }>
type _ExternalLinkMarkDefTo = Extract<_LinkMarkDef['to'], { _type: typeof DOCUMENT_TYPES.EXTERNAL_LINK }>

export type PortableTextMarkDef = Omit<_LinkMarkDef, 'to'> & { to: _InternalLinkMarkDefTo | _ExternalLinkMarkDefTo }

export type PortableTextFragment =
    |(Omit<_PortableTextBlock, 'markDefs'> & { markDefs: Array<PortableTextMarkDef> })
    | _PortableTextImage
