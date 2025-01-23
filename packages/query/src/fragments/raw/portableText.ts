import groq from "groq"
import type * as SanityTypes from '@kvantoriumvlz/schema/sanity.types.ts'
import { DOCUMENT_TYPES } from "@kvantoriumvlz/shared"
import { q } from "@/groqd.client"

type D = Extract<NonNullable<NonNullable<Extract<SanityTypes.KvantoriumPortableText[number], { _type: 'block' }>['markDefs']>[number]['to']>[number], { _type: 'kvantorium.externalLink' }>

export const portableTextProjection = groq`
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
                _type == 'externalLink' => { url },
                _type == 'internalLink' => {
                    ...reference -> {
                        _type,
                        _id,
                        'slug': slug.current,
                    }
                }
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

export type PortableTextResult = NonNullable<SanityTypes.PortableTextQueryResult[number]['description']>[number]

export type PortableBlock = Extract<PortableTextResult, { _type: 'block' }>
export type PortableImage = Extract<PortableTextResult, { _type: 'image' }>

type MarkDefs = NonNullable<PortableBlock['markDefs']>[number]
