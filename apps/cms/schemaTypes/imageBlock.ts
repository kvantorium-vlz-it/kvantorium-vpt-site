import { defineType } from "sanity";

export default defineType({
    name: 'imageBlock',
    type: 'object',
    fields: [
        {
            name: 'image',
            type: 'image',
        },
        {
            name: 'alt',
            type: 'string',
        },
    ],
})
