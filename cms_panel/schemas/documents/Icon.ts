import { requiredFieldValidation } from "../../assets/ts/utils";

export default {
    name: 'Icon',
    type: 'document',
    title: 'Иконки сайта',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Название иконки',
            validation: requiredFieldValidation,
        },
        {
            name: 'image',
            type: 'image',
            title: 'Изображение иконки',
            validation: requiredFieldValidation,
        },
    ],
}
