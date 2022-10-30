import { requiredFieldValidation } from "../../assets/ts/utils";

export default {
    name: 'Document',
    type: 'document',
    fields: [
        {
            name: 'name',
            type: 'string',
            validation: requiredFieldValidation,
        },
        {
            name: 'file',
            type: 'file',
            validation: requiredFieldValidation,
        }
    ]
}
