import { defineArrayMember, defineField, defineType } from "sanity"
import { DOCUMENT_TYPES, OBJECT_TYPES } from "../../constants"

const LINK_TYPE = {
    EXTERNAL: 0,
    INTERNAL: 1,
} as const

const linkAnnotation = defineArrayMember({
    name: 'link',
    title: 'Ссылка',
    type: 'object',
    fields: [
        defineField({
            name: 'linkType',
            title: 'Вариант ссылки',
            type: 'number',
            options: {
                list: [
                    { title: 'На внешний ресурс', value: LINK_TYPE.EXTERNAL },
                    { title: 'На внутренний ресурс', value: LINK_TYPE.INTERNAL },
                ],
            },
            validation: (rule) => rule
                .required()
                .error('Поле не может быть пустым'),
        }),
        defineField({
            name: 'external',
            title: 'Внешний ресурс',
            type: 'url',
            hidden: ({ parent }) => parent?.linkType !== LINK_TYPE.EXTERNAL,
            validation: (rule) => rule.custom((value, context: any) => (
                context.parent?.linkType === LINK_TYPE.INTERNAL
                    ? true
                    : (
                        context.parent?.linkType === LINK_TYPE.EXTERNAL
                        && typeof value === 'undefined'
                    )
                        ? 'Поле не может быть пустым'
                        : true
            )),
        }),
        defineField({
            name: 'internal',
            type: 'reference',
            title: 'Внутренний ресурс',
            to: [
                { type: DOCUMENT_TYPES.KVANTUM },
                { type: DOCUMENT_TYPES.NEWS },
            ],
            hidden: ({ parent }) => !parent?.linkType && parent?.linkType !== 1,
            validation: (rule) => rule.custom((value, context: any) => (
                context.parent?.linkType === LINK_TYPE.EXTERNAL
                    ? true
                    : (
                        context.parent?.linkType === LINK_TYPE.INTERNAL
                        && typeof value === 'undefined'
                    )
                        ? 'Поле не может быть пустым'
                        : true
            )),
        }),
        defineField({
            name: 'isOpenNewTab',
            type: 'boolean',
            title: 'Открывать в новой вкладке',
            initialValue: true,
            hidden: ({ parent }) => typeof parent?.linkType === 'undefined',
            validation: (rule) => rule
                .required()
                .error('Поле не может быть пустым'),
        }),
    ],
})

export default defineType({
    name: OBJECT_TYPES.PORTABLE_TEXT,
    type: 'array',
    of: [
        {
            type: 'block',
            styles: [
                { title: 'Обычный', value: 'normal' },
                { title: 'Заголовок 1', value: 'h1' },
                { title: 'Заголовок 2', value: 'h2' },
                { title: 'Заголовок 3', value: 'h3' },
                { title: 'Заголовок 4', value: 'h4' },
                { title: 'Заголовок 5', value: 'h5' },
                { title: 'Заголовок 6', value: 'h6' },
            ],
            marks: {
                decorators: [
                    { title: 'Жирный', value: 'strong' },
                    { title: 'Курсив', value: 'em' },
                    { title: 'Подчеркнутый', value: 'underline' },
                ],
                annotations: [
                    linkAnnotation
                ],
            },
            lists: [],
        },
        {
            type: 'image',
            title: 'Изображение',
            options: {
                hotspot: true,
            }
        },
    ],
})
