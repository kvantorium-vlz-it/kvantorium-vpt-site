import { requiredFieldValidation } from "../../assets/ts/utils";

export default {
    name: 'News',
    type: 'document',
    title: 'Новости',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Название новости',
            validation: requiredFieldValidation,
        },
        {
            name: 'content',
            type: 'RichText',
            title: 'Текст новости',
            validation: requiredFieldValidation,
        },
        {
            name: 'image',
            type: 'image',
            title: 'Изображение новости'
        },
        {
            name: 'shortContent',
            type: 'text',
            title: 'Короткое описание новости',
            description: 'Используется для добавления новости на другие страницы',
        },
        {
            name: 'tags',
            type: 'array',
            title: 'Категория новости',
            description: 'Используется для добавления новости в категорию',
            of: [
                {
                    type: 'reference',
                    to: [{ type: 'Tag' }],
                }
            ]
        }
    ]
}
