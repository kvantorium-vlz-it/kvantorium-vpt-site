import { requiredFieldValidation } from "../../assets/ts/utils";

export default {
    name: 'Icon',
    type: 'document',
    fields: [
        {
            name: 'name',
            type: 'string',
            validation: requiredFieldValidation,
        },
        {
            name: 'image',
            type: 'image',
            validation: requiredFieldValidation,
        },
    ],
}
