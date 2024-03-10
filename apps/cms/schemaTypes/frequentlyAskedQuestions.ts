import { defineField, defineType } from "sanity"

export default defineType({
    name: 'frequentlyAskedQuestions',
    type: 'document',
    fields: [
        defineField({
            name: 'question',
            type: 'string',
        }),
        defineField({
            name: 'answer',
            type: 'text',
        }),
    ],
})
