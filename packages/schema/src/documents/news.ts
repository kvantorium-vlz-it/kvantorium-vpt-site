import { DOCUMENT_TYPES } from "@kvantoriumvlz/shared/constants"
import { defineArrayMember, defineField, defineType } from "sanity"

const titleFieldSchema = defineField({
    name: 'title',
    title: 'Заголовок',
    type: 'string',
    validation: (rule) => rule
        .required()
        .error("Поле не может быть пустым"),
})

const previewImageFieldSchema = defineField({
    name: 'previewImage',
    title: 'Превью',
    description: 'Главное изображение новости',
    type: 'image',
    validation: (rule) => rule
        .assetRequired()
        .error("Поле не может быть пустым"),
})

const contentFieldSchema = defineField({
    name: 'content',
    title: 'Контент',
    type: DOCUMENT_TYPES.PORTABLE_TEXT,
    validation: (rule) => rule
        .required()
        .error("Поле не может быть пустым"),
})

const slugFieldSchema = defineField({
    name: 'slug',
    title: 'Человекочитаемая ссылка',
    type: 'slug',
    options: {
        source: 'title',
    },
    validation: (rule) => rule
        .required()
        .error("Поле не может быть пустым"),
})

const publishDateFieldSchema = defineField({
    name: 'publishDate',
    title: 'Дата публикации',
    type: 'date',
    options: {
        dateFormat: 'DD-MM-YYYY',
    },
    initialValue: () => new Date().toISOString().slice(0, 10),
})

const tagsFieldSchema = defineField({
    name: 'tags',
    title: 'Теги',
    type: 'array',
    of: [
        defineArrayMember({
            type: 'reference',
            to: [
                { type: DOCUMENT_TYPES.NEWS_TAG },
            ],
        })
    ],
})

const galleryFieldSchema = defineField({
    name: 'gallery',
    title: 'Галерея',
    description: 'Изображения, которые относятся к новости, но не находятся в контенте',
    type: 'array',
    of: [defineArrayMember({ type: 'image' })],
})

export const newsSchema = defineType({
    name: DOCUMENT_TYPES.NEWS,
    title: 'Новости',
    type: 'document',
    fields: [
        titleFieldSchema,
        previewImageFieldSchema,
        contentFieldSchema,
        slugFieldSchema,
        publishDateFieldSchema,
        tagsFieldSchema,
        galleryFieldSchema,
    ],
})
