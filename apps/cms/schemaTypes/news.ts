import { defineField, defineType } from "sanity"

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
            of: [{ type: 'block' }]
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
    ],
})
