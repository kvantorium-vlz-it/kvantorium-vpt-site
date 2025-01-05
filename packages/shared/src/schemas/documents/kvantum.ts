import { DOCUMENT_TYPES } from '@constants'
import { defineArrayMember, defineField, defineType } from 'sanity'

const nameFieldSchema = defineField({
    name: 'name',
    title: 'Название квантума',
    type: 'string',
    validation: (rule) => rule
        .required()
        .error('Поле не может быть пустым'),
})

const slugFieldSchema = defineField({
    name: 'slug',
    title: 'Человекочитаемая ссылка',
    type: 'slug',
    options: {
        source: 'name',
    },
    validation: (rule) => rule
        .required()
        .error('Поле не может быть пустым'),
})

const iconFieldSchema = defineField({
    name: 'icon',
    title: 'Иконка квантума',
    type: 'image',
    validation: (rule) => rule
        .required()
        .error('Поле не может быть пустым'),
})

const descriptionFieldSchema = defineField({
    name: 'description',
    title: 'Описание квантума',
    type: DOCUMENT_TYPES.PORTABLE_TEXT,
    validation: (rule) => rule
        .required()
        .error("Поле не может быть пустым"),
})

const topicsFieldSchema = defineField ({
    name: 'topics',
    title: 'Основные темы, рассматриваемые на направлении',
    type: 'array',
    of: [
        defineArrayMember({
            type: 'string',
            validation: (rule) => rule
                .required()
                .error('Поле не может быть пустым'),
        }),
    ],
    validation: (rule) => rule
        .required()
        .error('Необходимо указать хотя бы одну тему')
})

export const kvantumSchema = defineType({
    name: DOCUMENT_TYPES.KVANTUM,
    title: 'Квантумы',
    type: 'document',
    fields: [
        nameFieldSchema,
        slugFieldSchema,
        iconFieldSchema,
        descriptionFieldSchema,
        topicsFieldSchema,
    ],
})
