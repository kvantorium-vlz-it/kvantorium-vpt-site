import { DOCUMENT_TYPES } from "@kvantoriumvlz/shared"
import { defineArrayMember, defineField } from "sanity"

const isOpenNewTabFieldSchema = defineField({
    name: 'isOpenNewTab',
    type: 'boolean',
    title: 'Открывать в новой вкладке',
    initialValue: true,
    validation: (rule) => rule
        .required()
        .error('Поле не может быть пустым'),
})

const externalLinkUrlFieldSchema = defineField({
    name: 'url',
    title: 'URL-адрес ресурса',
    type: 'url',
    validation: (rule) => rule
        .required()
        .error('Поле не может быть пустым'),
})

const externalLinkSchema = defineField({
    name: DOCUMENT_TYPES.EXTERNAL_LINK,
    title: 'Ссылка на внешний ресурс',
    type: 'object',
    fields: [
        externalLinkUrlFieldSchema,
    ],
    validation: (rule) => rule
        .required()
        .error('Поле не может быть пустым'),
})

const internalLinkReferenceFieldSchema = defineField({
    name: 'reference',
    title: 'Ресурс',
    type: 'reference',
    to: [
        { type: DOCUMENT_TYPES.KVANTUM },
        { type: DOCUMENT_TYPES.NEWS },
    ],
    validation: (rule) => rule
        .required()
        .error('Поле не может быть пустым'),
})

const internalLinkSchema = defineField({
    name: DOCUMENT_TYPES.INTERNAL_LINK,
    title: 'Ссылка на внутренний ресурс',
    type: 'object',
    fields: [
        internalLinkReferenceFieldSchema,
    ],
    validation: (rule) => rule
        .required()
        .error('Поле не может быть пустым'),
})

const toFieldSchema = defineField({
    name: 'to',
    title: 'Ресурс',
    type: 'array',
    of: [
        internalLinkSchema,
        externalLinkSchema,
    ],
    validation: (rule) => rule
        .length(1)
        .error('Можно ссылаться только на один ресурс'),
})

export const linkAnnotation = defineArrayMember({
    name: DOCUMENT_TYPES.LINK,
    title: 'Ссылка',
    type: 'object',
    fields: [
        toFieldSchema,
        isOpenNewTabFieldSchema,
    ],
})
