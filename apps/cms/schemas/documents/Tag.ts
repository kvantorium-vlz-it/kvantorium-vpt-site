import { requiredFieldValidation } from "../../assets/ts/utils";

export default {
    name: 'Tag',
    type: 'document',
    title: 'Категории',
    fields: [
        {
            name: 'tag',
            type: 'string',
            title: 'Название категории',
            validation: requiredFieldValidation,
        },
        {
            name: 'color',
            type: 'color',
            options: {
                disableAlpha: true,
            },
            title: 'Цвет категории',
            validation: requiredFieldValidation,
        },
        {
            name: 'label',
            type: 'string',
            title: 'Подпись категирии',
        }
    ]
}
