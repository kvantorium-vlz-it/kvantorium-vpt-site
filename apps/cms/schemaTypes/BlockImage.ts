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
        {
            name: 'isFloating',
            type: 'boolean',
        },
        {
            name: 'floatingSide',
            type: 'string',
            initialValue: 'left',
            options: {
                list: [
                    { title: 'left', value: 'left' },
                    { title: 'right', value: 'right' },
                ],
            },
            hidden: ({ parent }) => !parent?.isFloating,
        }
    ],
})
