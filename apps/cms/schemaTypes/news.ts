import { defineField, defineType } from "sanity"
import BlockImage from "./BlockImage"
import NewsTag from "./NewsTag"

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
            of: [{ type: 'block' }, { type: BlockImage.name }]
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
                to: [{ type: NewsTag.name }]
            }]
        }),
        defineField({
            name: 'images',
            type: 'array',
            of: [{ type: 'image' }],
        }),
    ],
})
