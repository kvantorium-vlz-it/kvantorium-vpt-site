import { DOCUMENT_TYPES } from "@constants"
import { defineArrayMember, defineField, defineType } from "sanity"

const isOpenNewTabFieldSchema = defineField({
    name: 'isOpenNewTab',
    type: 'boolean',
    title: 'Открывать в новой вкладке',
    initialValue: true,
})

const externalLinkUrlFieldSchema = defineField({
    name: 'url',
    title: 'URL-адрес ресурса',
    type: 'url',
})

const externalLinkSchema = defineArrayMember({
    name: DOCUMENT_TYPES.EXTERNAL_LINK,
    title: 'Ссылка на внешний ресурс',
    type: 'object',
    fields: [
        externalLinkUrlFieldSchema,
    ],
})

const internalLinkReferenceFieldSchema = defineField({
    name: 'reference',
    title: 'Ресурс',
    type: 'reference',
    to: [
        { type: DOCUMENT_TYPES.KVANTUM },
        { type: DOCUMENT_TYPES.NEWS },
    ],
})

const internalLinkSchema = defineField({
    name: DOCUMENT_TYPES.INTERNAL_LINK,
    title: 'Ссылка на внутренний ресурс',
    type: 'object',
    fields: [
        internalLinkReferenceFieldSchema,
    ],
})

const toFieldSchema = defineField({
    name: 'to',
    title: 'Ресурс',
    type: 'array',
    of: [
        internalLinkSchema,
        externalLinkSchema,
    ],
    validation: (rule) => rule.length(1),
})

export const linkAnnotation = defineArrayMember({
    name: DOCUMENT_TYPES.LINK,
    title: 'Ссылка',
    type: 'object',
    fields: [
        toFieldSchema,
        isOpenNewTabFieldSchema,
    ],
    validation: (rule) => rule.required(),
})
