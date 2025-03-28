import { DOCUMENT_TYPES, LINK_TYPE } from "@kvantoriumvlz/shared"
import { defineArrayMember, defineField } from "sanity"

const linkTypeFieldSchema = defineField({
    name: 'linkType',
    type: 'string',
    title: 'Тип ссылки',
    options: {
        list: [
            { title: 'Внутренний документ', value: LINK_TYPE.INTERNAL },
            { title: 'Ссылка на внешний сайт', value: LINK_TYPE.WEBSITE },
            { title: 'Почта', value: LINK_TYPE.EMAIL },
            { title: 'Телефон', value: LINK_TYPE.PHONE },
            { title: 'Местоположение', value: LINK_TYPE.GEOLOCATION },
            { title: 'Другое', value: LINK_TYPE.OTHER },
        ]
    },
    validation: (rule) => rule.required(),
})

const isOpenNewTabFieldSchema = defineField({
    name: 'isOpenNewWindow',
    type: 'boolean',
    initialValue: false,
    hidden: ({ parent }) => parent.linkType === LINK_TYPE.INTERNAL,
    validation: (rule) => rule.required(),
})

const labelFieldSchema = defineField({
    name: 'label',
    title: 'Подпись ссылки',
    type: 'string',
    validation: (rule) => rule.required(),
})

const internalValueFieldSchema = defineField({
    name: 'internalValue',
    type: 'reference',
    title: 'Документ',
    to: [{ type: DOCUMENT_TYPES.KVANTUM }, { type: DOCUMENT_TYPES.NEWS }],
    hidden: ({ parent }) => parent.linkType !== LINK_TYPE.INTERNAL,
})

const websiteValueFieldSchema = defineField({
    name: 'websiteValue',
    type: 'url',
    title: 'Ссылка на внешний сайт',
    hidden: ({ parent }) => parent.linkType !== LINK_TYPE.WEBSITE
})

const emailValueFieldSchema = defineField({
    name: 'emailValue',
    type: 'string',
    title: 'Почта',
    hidden: ({ parent }) => parent.linkType !== LINK_TYPE.EMAIL
})

const phoneValueFieldSchama = defineField({
    name: 'phoneValue',
    type: 'string',
    title: 'Номер телефона',
    hidden: ({ parent }) => parent.linkType !== LINK_TYPE.PHONE,
})

const geolocationValueFieldSchema = defineField({
    name: 'geolocationValue',
    type: 'string',
    title: 'Геолокация',
    hidden: ({ parent }) => parent.linkType !== LINK_TYPE.GEOLOCATION,
})

const otherValueFieldSchema = defineField({
    name: 'otherValue',
    type: 'string',
    title: 'Ссылка',
    hidden: ({ parent }) => parent.linkType !== LINK_TYPE.OTHER,
})

export const linkType = defineArrayMember({
    name: 'linkType',
    type: 'object',
    fields: [
        linkTypeFieldSchema,
        isOpenNewTabFieldSchema,
        labelFieldSchema,
        internalValueFieldSchema,
        websiteValueFieldSchema,
        emailValueFieldSchema,
        phoneValueFieldSchama,
        geolocationValueFieldSchema,
        otherValueFieldSchema,
    ],
})
