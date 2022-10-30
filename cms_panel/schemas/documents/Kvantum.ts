import { requiredFieldValidation } from "../../assets/ts/utils";

export default {
    name: 'Kvantum',
    type: 'document',
    fields: [
        {
            name: 'name',
            type: 'string',
            validation: requiredFieldValidation,
        },
        {
            name: 'description',
            type: 'RichText',
            validation: requiredFieldValidation,
        },
        {
            name: 'shortDescription',
            type: 'text',
            validation: requiredFieldValidation,
        },
        {
            name: 'icon',
            type: 'image',
            validation: requiredFieldValidation,
        },
        {
            name: 'image',
            type: 'image',
            validation: requiredFieldValidation,
        },
    ]
}
