import { requiredFieldValidation } from "../../assets/ts/utils";

export default {
    name: 'Event',
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
        },
        {
            name: 'content',
            type: 'RichText',
            validation: requiredFieldValidation,
        },
    ]
}
