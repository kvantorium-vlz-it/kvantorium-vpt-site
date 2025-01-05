import groq from "groq"
import * as SanityTypes from '@/.shared/sanity.types.ts'

// @sanity-typegen-ignore
export const portableTextProjection = groq`
    _key,
    _type == 'block' => {
        _type,
        level,
        children[] {
            marks,
            text,
            _type,
            _key,
        },
        style,
        markDefs {
            _type,
            _key,
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
