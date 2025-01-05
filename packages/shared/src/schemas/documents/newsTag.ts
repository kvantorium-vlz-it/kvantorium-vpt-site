import { DOCUMENT_TYPES } from "@constants"
import { defineField, defineType } from "sanity"

const nameFieldSchema = defineField({
    name: 'name',
    title: 'Тег',
    type: 'string',
})

export const newsTagSchema = defineType({
    name: DOCUMENT_TYPES.NEWS_TAG,
    title: 'Новостные теги',
    type: 'document',
    fields: [
        nameFieldSchema,
    ],
})
