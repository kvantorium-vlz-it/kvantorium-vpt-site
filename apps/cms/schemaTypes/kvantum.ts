import { defineField, defineType } from "sanity"

export default defineType({
    name: 'kvantum',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            type: 'string',
        }),
        defineField({
            name: 'slug',
            type: 'slug',
            options: {
                source: 'name',
            },
        }),
    ],
})
