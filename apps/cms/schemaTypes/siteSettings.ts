import { defineType } from "sanity"
import imageBlock from "./imageBlock"

export default defineType({
    name: 'siteSettings',
    type: 'document',
    fields: [
        {
            name: 'about',
            type: 'array',
            of: [{ type: 'block' }, { type: imageBlock.name }]
        },
        {
            name: 'mediaGallery',
            type: 'array',
            of: [{ type: 'image' }]
        }
    ]
})
