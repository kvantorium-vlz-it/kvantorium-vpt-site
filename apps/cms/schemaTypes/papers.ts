import { defineType } from "sanity";

export default defineType({
    name: 'paper',
    type: 'document',
    fields: [
        defineType({
            name: 'name',
            type: 'string',
        }),
        defineType({
            name: 'file',
            type: 'file',
        }),
    ]
})
