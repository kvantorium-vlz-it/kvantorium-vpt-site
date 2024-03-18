import { defineType } from "sanity";

export default defineType({
    name: 'newsTag',
    type: 'document',
    fields: [
        {
            name: 'name',
            type: 'string',
        },
    ],
})
