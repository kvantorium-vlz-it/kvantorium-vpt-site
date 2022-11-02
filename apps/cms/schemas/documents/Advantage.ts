import { requiredFieldValidation } from "../../assets/ts/utils";

export default {
    name: 'Advantage',
    type: 'document',
    title: 'Преимущество',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Заголовок преимущества',
            validation: requiredFieldValidation,
        },
        {
            name: 'description',
            type: 'text',
            title: 'Описание преимущества',
            validation: requiredFieldValidation,
        },
        {
            name: 'image',
            type: 'image',
            title: 'Изображение преимущества',
            validation: requiredFieldValidation,
        }
    ]
}
