import { requiredFieldValidation } from "../../assets/ts/utils";

export default {
    name: 'News',
    type: 'document',
    fields: [
        {
            name: 'name',
            type: 'string',
            validation: requiredFieldValidation,
        },
        {
            name: 'content',
            type: 'RichText',
            validation: requiredFieldValidation,
        },
        {
            name: 'image',
            type: 'image',
        },
        {
            name: 'shortContent',
            type: 'text',
        },
        {
            name: 'tags',
            type: 'array',
            of: [
                {
                    type: 'reference',
                    to: [{ type: 'Tag' }],
                }
            ]
        }
    ]
}
