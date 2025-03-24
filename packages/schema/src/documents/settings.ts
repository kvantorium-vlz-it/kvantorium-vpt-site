import { DOCUMENT_TYPES, CONTACT_LINK_TYPE } from '@kvantoriumvlz/shared'
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

const contactLink = defineArrayMember({
    name: 'contactLink',
    type: 'object',
    title: 'Контакт',
    fields: [
        defineField({
            name: 'linkType',
            type: 'string',
            title: 'Тип ссылки',
            options: {
                list: [
                    { title: 'Ссылка на сайт', value: CONTACT_LINK_TYPE.WEBSITE },
                    { title: 'Почта', value: CONTACT_LINK_TYPE.EMAIL },
                    { title: 'Местоположение', value: CONTACT_LINK_TYPE.GEOLOCATION },
                    { title: 'Телефон', value: CONTACT_LINK_TYPE.PHONE },
                    { title: 'Другое', value: CONTACT_LINK_TYPE.OTHER },
                ],
            },
            validation: (rule) => rule
                .required()
                .error('Поле не может быть пустым')
        }),
        defineField({
            name: 'link',
            type: 'url',
            validation: (rule) => rule
                .required()
                .error('Поле не может быть пустым')
                .uri({
                    allowRelative: true,
                    scheme: ['http', 'https', 'mailto', 'tel', 'geo'],
                })
                .error('Неверная ссылка'),
        }),
        defineField({
            name: 'title',
            type: 'string',
            validation: (rule) => rule
                .required()
                .error('Поле не может быть пустым')
        }),
    ],
})

const kvantoriumContactsFieldSchema = defineField({
    name: 'kvantoriumContacts',
    title: 'Контакты ДТ "Кванториум "Волжский Политех"',
    type: 'array',
    of: [
        contactLink,
    ]
})

const polytechСontactsFieldSchema = defineField({
    name: 'collegeContacts',
    title: 'Контакты "ВПТ',
    type: 'array',
    of: [
        contactLink,
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
