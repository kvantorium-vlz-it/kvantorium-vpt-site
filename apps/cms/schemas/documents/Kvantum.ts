import { requiredRule } from '../../assets/ts/utils'

const SHORT_DESCRIPTION_MAX_LENGTH = 200

export default {
    name: 'Kvantum',
    type: 'document',
    title: 'Квантумы',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Название квантума',
            validation: requiredRule,
        },
        {
            name: 'description',
            type: 'RichText',
            title: 'Описание квантума',
            validation: requiredRule,
        },
        {
            name: 'shortDescription',
            type: 'text',
            title: `Короткое описание квантума (${SHORT_DESCRIPTION_MAX_LENGTH} символов).`,
            validation: Rule => [
                requiredRule(Rule),
                Rule.max(SHORT_DESCRIPTION_MAX_LENGTH),
            ],
        },
        {
            name: 'icon',
            type: 'image',
            title: 'Иконка квантума',
            validation: requiredRule,
        },
        {
            name: 'image',
            type: 'image',
            title: 'Изображение квантума',
            description: 'Основное изображение, представляющее квантум',
        },
    ],
    preview: {
        select: {
            title: 'name',
            media: 'icon',
        }
    }
}
