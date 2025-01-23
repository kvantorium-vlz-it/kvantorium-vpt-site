import { DOCUMENT_TYPES } from "@kvantoriumvlz/shared/constants"
import { defineField, defineType } from "sanity"

const nameFieldSchema = defineField({
    name: 'name',
    title: 'Тег',
    type: 'string',
    validation: (rule) => rule
        .required()
        .error('Поле не может быть пустым'),
})

export const newsTagSchema = defineType({
    name: DOCUMENT_TYPES.NEWS_TAG,
    title: 'Новостные теги',
    type: 'document',
    fields: [
        nameFieldSchema,
    ],
})
