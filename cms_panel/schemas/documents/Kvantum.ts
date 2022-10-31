import { requiredFieldValidation } from "../../assets/ts/utils";

export default {
    name: 'Kvantum',
    type: 'document',
    title: 'Квантумы',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Название квантума',
            validation: requiredFieldValidation,
        },
        {
            name: 'description',
            type: 'RichText',
            title: 'Подробное описание квантума',
            description: 'Исползуется на отдельной странице квантума',
            validation: requiredFieldValidation,
        },
        {
            name: 'shortDescription',
            type: 'text',
            title: 'Короткое описание квантума',
            description: 'Используется на других страницах',
            validation: requiredFieldValidation,
        },
        {
            name: 'icon',
            type: 'image',
            title: 'Иконка квантума',
            validation: requiredFieldValidation,
        },
        {
            name: 'image',
            type: 'image',
            title: 'Основное изображение квантума',
            validation: requiredFieldValidation,
        },
    ]
}
