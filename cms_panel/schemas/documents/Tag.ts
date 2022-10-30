import { requiredFieldValidation } from "../../assets/ts/utils";

export default {
    name: 'Tag',
    type: 'document',
    fields: [
        {
            name: 'tag',
            type: 'string',
            validation: requiredFieldValidation,
        },
        {
            name: 'color',
            type: 'color',
            options: {
                disableAlpha: true,
            },
            validation: requiredFieldValidation,
        },
        {
            name: 'label',
            type: 'string',
        }
    ]
}
