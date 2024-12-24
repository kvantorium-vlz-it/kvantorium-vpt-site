import { defineField, defineType } from "@sanity-typed/types"
import { DOCUMENT_TYPES } from "../constants.js"

const nameFieldSchema = defineField({
    name: 'name',
    title: 'Тег',
    type: 'string',
})

const newsTagSchema = defineType({
    name: DOCUMENT_TYPES.NEWS_TAG,
    title: 'Новостные теги',
    type: 'document',
    fields: [
        nameFieldSchema,
    ],
})

export default newsTagSchema
