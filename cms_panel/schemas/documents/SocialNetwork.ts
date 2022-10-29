import { requiredFieldValidation } from "../../assets/ts/utils";

export default {
    name: 'SocialNetwork',
    type: 'document',
    fields: [
        {
            name: 'link',
            type: 'url',
            validation: requiredFieldValidation,
        },
        {
            name: 'icon',
            type: 'reference',
            to: [{ type: 'Icon' }],
            validation: requiredFieldValidation,
        },
        {
            name: 'title',
            type: 'string',
        },
    ],
    preview: {
        select: {
            title: 'title',
            subtitle: 'link',
        }
    }
}
