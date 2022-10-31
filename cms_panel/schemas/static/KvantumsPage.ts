import { requiredFieldValidation } from "../../assets/ts/utils";

export default {
    name: 'KvantumsPage',
    type: 'document',
    fields: [
        {
            name: 'heading',
            type: 'string',
            validation: requiredFieldValidation,
        },
        {
            name: 'subHeading',
            type: 'string',
        },
        {
            name: 'description',
            type: 'RichText',
        }
    ]
}
