import { createClient } from "@sanity/client"
import groq from "groq"

export const client = createClient({
    projectId: process.env.SANITY_STUDIO_PROJECT_ID!,
    dataset: process.env.SANITY_STUDIO_DATASET!,
})

const portableTextQuery = groq`*[_type == 'kvantorium.kvantum'] {
    'description': description[]{
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
    }
}`

async () => {
    const result = await client.fetch(portableTextQuery)
    return result
}
