import { requiredFieldValidation } from "../../assets/ts/utils";

export default {
    name: 'Contact',
    type: 'document',
    fields: [
        {
            name: 'type',
            type: 'string',
            options: {
                list: [
                    { value: 'link', title: 'ссылка' },
                    { value: 'email', title: 'почта' },
                    { value: 'tel', title: 'телефон' },
                ]
            },
            validation: requiredFieldValidation,
        },
        {
            name: 'value',
            type: 'string',
            validation: requiredFieldValidation,
        },
        {
            name: 'label',
            type: 'string',
            validation: requiredFieldValidation,
        },
    ],
    preview: {
        select: {
            title: 'label',
        }
    }
}
