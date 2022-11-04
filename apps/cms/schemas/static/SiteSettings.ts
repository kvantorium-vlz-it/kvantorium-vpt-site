import { requiredFieldValidation } from "../../assets/ts/utils"

const commonSettings = [
    {
        name: 'tabTitle',
        type: 'string',
        title: 'Название странице во вкладках браузера',
        validation: requiredFieldValidation,
    },
]

const footerGroupMeta = {
    name: 'footer',
    title: 'Футер',
}

const footerGroup = {
    name: footerGroupMeta.name,
    title: footerGroupMeta.title,
    fields: [
        {
            name: 'footerContacts',
            type: 'array',
            title: 'Контакты, которые надо отобразить',
            of: [{ type: 'reference', to: [{ type: 'Contact' }] }],
            group: footerGroupMeta.name,
        },
        {
            name: 'footerSocials',
            type: 'array',
            title: 'Ссылки на социальные сети, которые надо отобразить',
            of: [{ type: 'reference', to: [{ type: 'SocialNetwork' }] }],
            group: footerGroupMeta.name,
        },
        {
            name: 'footerCopyright',
            type: 'string',
            title: 'Текст об авторском праве сайта в футере',
            group: footerGroupMeta.name,
            validation: requiredFieldValidation,
        }
    ]
}

export default {
    name: 'SiteSettings',
    type: 'document',
    groups: [
        footerGroupMeta,
    ],
    fields: [
        ...commonSettings,
        ...footerGroup.fields,
    ]
}
