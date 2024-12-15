import { defineField, defineType } from "sanity"
import { DocumentIcon } from '@sanity/icons'
import { DOCUMENT_TYPES, OBJECT_TYPES } from '../../constants'

export default defineType({
    name: DOCUMENT_TYPES.KVANTUM,
    title: 'Квантумы',
    type: 'document',
    icon: DocumentIcon,
    fields: [
        defineField({
            name: 'name',
            title: 'Название квантума',
            type: 'string',
            validation: (rule) => rule
                .required()
                .error('Поле не может быть пустым'),
        }),

        defineField({
            name: 'url',
            title: 'Человекочитаемая ссылка',
            type: 'slug',
            options: {
                source: 'name',
            },
            validation: (rule) => rule
                .required()
                .error('Поле не может быть пустым'),
        }),

        defineField({
            name: 'icon',
            title: 'Иконка квантума',
            type: 'image',
            validation: (rule) => rule
                .required()
                .error('Поле не может быть пустым'),
        }),

        defineField({
            name: 'description',
            title: 'Описание квантума',
            type: OBJECT_TYPES.PORTABLE_TEXT,
            validation: (rule) => rule
                .required()
                .error("Поле не может быть пустым"),
        }),

        defineField ({
            name: 'topics',
            title: 'Основные темы, рассматриваемые на направлении',
            type: 'array',
            of: [
                {
                    type: 'string',
                    validation: (rule) => rule
                        .required()
                        .error('Поле не может быть пустым'),
                },
            ],
            validation: (rule) => rule
                .required()
                .error('Необходимо указать хотя бы одну тему')
        }),
    ],
})
