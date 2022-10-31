import { requiredFieldValidation } from "../../assets/ts/utils";

export default {
    name: 'Event',
    type: 'document',
    title: 'События',
    description: 'Посты о событях',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Название события',
            validation: requiredFieldValidation,
        },
        {
            name: 'image',
            title: 'Главное изображение события',
            type: 'image',
        },
        {
            name: 'content',
            type: 'RichText',
            title: 'Описание события',
            validation: requiredFieldValidation,
        },
    ]
}
