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
    }
}`

async () => {
    const result = await client.fetch(portableTextQuery)
    return result
}
