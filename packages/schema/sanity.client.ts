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
                isOpenNewTab,
                'to': to[] {
                    _type == 'kvantorium.externalLink' => { url },
                    _type == 'kvantorium.internalLink' => {
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
    }
}`

async () => {
    const result = await client.fetch(portableTextQuery)
    return result
}
