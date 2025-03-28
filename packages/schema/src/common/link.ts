import { DOCUMENT_TYPES, LINK_TYPE } from "@kvantoriumvlz/shared"
import { CustomValidator, defineArrayMember, defineField } from "sanity"

type LinkType = typeof LINK_TYPE[keyof typeof LINK_TYPE]

interface ContextParent {
    linkType?: typeof LINK_TYPE[keyof typeof LINK_TYPE]
}

const valueValidationFactory = (linkType: LinkType): CustomValidator<any> => (value, context) => {
    const parent = context.parent as ContextParent

    if (!parent.linkType) {
        return 'Необходимо указать тип ссылки'
    }

    const isMatchLinkType = parent.linkType === linkType

    if (isMatchLinkType && typeof value === 'undefined') {
        return 'Поле не может быть пустым'
    }

    return true
}

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
    validation: (rule) => rule.required().error('Поле не может быть пустым'),
})

const isOpenNewTabFieldSchema = defineField({
    name: 'isOpenNewWindow',
    type: 'boolean',
    initialValue: false,
    hidden: ({ parent }) => parent.linkType === LINK_TYPE.INTERNAL,
    validation: (rule) => rule.required().error('Поле не может быть пустым'),
})

const labelFieldSchema = defineField({
    name: 'label',
    title: 'Подпись ссылки',
    type: 'string',
    validation: (rule) => rule.required().error('Поле не может быть пустым'),
})

const internalValueFieldSchema = defineField({
    name: 'internalValue',
    type: 'reference',
    title: 'Документ',
    to: [{ type: DOCUMENT_TYPES.KVANTUM }, { type: DOCUMENT_TYPES.NEWS }],
    hidden: ({ parent }) => parent.linkType !== LINK_TYPE.INTERNAL,
    validation: (rule) => rule.custom(valueValidationFactory(LINK_TYPE.INTERNAL)),
})

const websiteValueFieldSchema = defineField({
    name: 'websiteValue',
    type: 'url',
    title: 'Ссылка на внешний сайт',
    hidden: ({ parent }) => parent.linkType !== LINK_TYPE.WEBSITE,
    validation: (rule) => rule.custom(valueValidationFactory(LINK_TYPE.WEBSITE)),
})

const emailValueFieldSchema = defineField({
    name: 'emailValue',
    type: 'string',
    title: 'Почта',
    hidden: ({ parent }) => parent.linkType !== LINK_TYPE.EMAIL,
    validation: (rule) => rule.custom(valueValidationFactory(LINK_TYPE.EMAIL)),
})

const phoneValueFieldSchama = defineField({
    name: 'phoneValue',
    type: 'string',
    title: 'Номер телефона',
    hidden: ({ parent }) => parent.linkType !== LINK_TYPE.PHONE,
    validation: (rule) => rule.custom(valueValidationFactory(LINK_TYPE.PHONE)),
})

const geolocationValueFieldSchema = defineField({
    name: 'geolocationValue',
    type: 'string',
    title: 'Геолокация',
    hidden: ({ parent }) => parent.linkType !== LINK_TYPE.GEOLOCATION,
    validation: (rule) => rule.custom(valueValidationFactory(LINK_TYPE.GEOLOCATION)),
})

const otherValueFieldSchema = defineField({
    name: 'otherValue',
    type: 'string',
    title: 'Ссылка',
    hidden: ({ parent }) => parent.linkType !== LINK_TYPE.OTHER,
    validation: (rule) => rule.custom(valueValidationFactory(LINK_TYPE.OTHER)),
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
