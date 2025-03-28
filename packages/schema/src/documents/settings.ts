import { DOCUMENT_TYPES } from '@kvantoriumvlz/shared'
import { linkSchema } from '../common/link'
import { defineArrayMember, defineField, defineType } from "sanity"

const aboutFieldSchema = defineField({
    name: 'about',
    title: 'О нас',
    type: DOCUMENT_TYPES.PORTABLE_TEXT,
    initialValue: [],
    validation: (rule) => rule
        .required()
        .error("Поле не может быть пустым"),
})

const documentsFieldSchema = defineField({
    name: 'documents',
    title: 'Документы',
    type: 'array',
    of: [
        defineArrayMember({
            name: 'documentFile',
            type: 'object',
            fields: [
                defineField({
                    name: 'label',
                    title: 'Подпись файла',
                    type: 'string',
                    validation: (rule) => rule
                        .required()
                        .error('Поле не может быть пустым'),
                }),
                defineField({
                    name: 'file',
                    title: 'Файл',
                    type: 'file',
                    validation: (rule) => rule
                        .required()
                        .error('Поле не может быть пустым')
                        .assetRequired(),
                }),
            ],
        }),
    ],
})

const kvantoriumContactsFieldSchema = defineField({
    name: 'kvantoriumContacts',
    title: 'Контакты ДТ "Кванториум "Волжский Политех"',
    type: 'array',
    of: [
        linkSchema,
    ]
})

const polytechСontactsFieldSchema = defineField({
    name: 'collegeContacts',
    title: 'Контакты "ВПТ',
    type: 'array',
    of: [
        linkSchema,
    ]
})

export const settingsSchema = defineType({
    name: DOCUMENT_TYPES.SETTINGS,
    type: 'document',
    title: 'Настройки',
    fields: [
        aboutFieldSchema,
        documentsFieldSchema,
        kvantoriumContactsFieldSchema,
        polytechСontactsFieldSchema,
    ],
    preview: {
        prepare: () => ({ title: 'Настройки' })
    }
})
