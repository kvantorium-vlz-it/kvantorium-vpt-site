import { requiredFieldValidation } from "../../assets/ts/utils";

export default {
    name: 'SocialNetwork',
    type: 'document',
    title: 'Социальные сети',
    description: 'Ссылки на социальные сети',
    fields: [
        {
            name: 'link',
            type: 'url',
            title: 'Ссылка',
            validation: requiredFieldValidation,
        },
        {
            name: 'icon',
            type: 'reference',
            to: [{ type: 'Icon' }],
            title: 'Иконка',
            validation: requiredFieldValidation,
        },
        {
            name: 'title',
            type: 'string',
            title: 'Название ссылки',
        },
    ],
    preview: {
        select: {
            title: 'title',
            subtitle: 'link',
        }
    }
}
