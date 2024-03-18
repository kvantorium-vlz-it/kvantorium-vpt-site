import { defineField, defineType } from "sanity"
import imageBlock from "./imageBlock"
import newsTag from "./newsTag"

export default defineType({
    name: 'news',
    type: 'document',
    fields: [
        defineField({
            name: 'heading',
            type: 'string',
        }),
        defineField({
            name: 'previewImage',
            type: 'image',
        }),
        defineField({
            name: 'content',
            type: 'array',
            of: [{ type: 'block' }, { type: imageBlock.name }]
        }),
        defineField({
            name: 'slug',
            type: 'slug',
            options: {
                source: 'heading',
            },
        }),
        defineField({
            name: 'publishDate',
            type: 'datetime',
        }),
        defineField({
            name: 'tags',
            type: 'array',
            of: [{
                type: 'reference',
                to: [{ type: newsTag.name }]
            }]
        }),
        defineField({
            name: 'images',
            type: 'array',
            of: [{ type: 'image' }],
        }),
    ],
})
