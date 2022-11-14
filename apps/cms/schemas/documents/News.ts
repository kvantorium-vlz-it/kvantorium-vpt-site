import { requiredRule } from '../../assets/ts/utils'

export default {
    name: 'News',
    type: 'document',
    title: 'Новости/События',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Заголовок',
            validation: requiredRule,
        },
        {
            name: 'content',
            type: 'RichText',
            title: 'Текст новости',
            validation: requiredRule,
        },
        {
            name: 'shortContent',
            type: 'text',
            title: 'Короткое описание новости',
            validation: requiredRule,
        },
        {
            name: 'image',
            type: 'image',
            title: 'Изображение новости',
        },
    ]
}
