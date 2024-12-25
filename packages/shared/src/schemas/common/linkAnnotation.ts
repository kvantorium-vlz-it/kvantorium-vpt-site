import { defineArrayMember, defineField } from "@sanity-typed/types";
import { DOCUMENT_TYPES, LINK_TYPE } from "../../constants.js";

const linkTypeFieldSchema = defineField({
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
})

const externalFieldSchema = defineField({
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
})

const internalFieldSchema = defineField({
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
})

const isOpenNewTabFieldSchema = defineField({
    name: 'isOpenNewTab',
    type: 'boolean',
    title: 'Открывать в новой вкладке',
    initialValue: true,
    hidden: ({ parent }) => typeof parent?.linkType === 'undefined',
    validation: (rule) => rule
        .required()
        .error('Поле не может быть пустым'),
})

export const linkAnnotation = defineArrayMember({
    name: 'link',
    title: 'Ссылка',
    type: 'object',
    fields: [
        linkTypeFieldSchema,
        externalFieldSchema,
        internalFieldSchema,
        isOpenNewTabFieldSchema,
    ],
})
