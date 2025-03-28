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
            isOpenNewWindow,
            linkType,
            label,

            'to': select(
               linkType == 'internalType' => internalValue->{
                  _type,
                  _id,
                  'slug': slug.current
               },
               linkType == 'websiteType' => websiteValue,
               linkType == 'phoneType' => phoneValue,
               linkType == 'emailType' => emailValue,
               linkType == 'geolocationType' => geolocationValue,
               linkType == 'otherType' => otherValue,
            )
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

export type PortableTextMarkDef = _LinkMarkDef

export type PortableTextFragment =
    |(Omit<_PortableTextBlock, 'markDefs'> & { markDefs: Array<PortableTextMarkDef> })
    | _PortableTextImage
