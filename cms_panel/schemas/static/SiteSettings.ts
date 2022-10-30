import { onlyUniqueFilter, requiredFieldValidation } from "../../assets/ts/utils"

const commonSettings = [
    {
        name: 'tabTitle',
        type: 'string',
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
            of: [{ type: 'reference', to: [{ type: 'Contact' }] }],
            group: footerGroupMeta.name,
        },
        {
            name: 'footerSocials',
            type: 'array',
            of: [{ type: 'reference', to: [{ type: 'SocialNetwork' }] }],
            group: footerGroupMeta.name,
        },
        {
            name: 'footerCopyright',
            type: 'string',
            group: footerGroupMeta.name,
            validation: requiredFieldValidation,
        }
    ]
}

export default {
    name: 'SiteSettings',
    type: 'document',
    groups: [
        // heroGroupMeta,
        // kvantumsGroupMeta,
        // advantagesGroupMeta,
        // mapGroupMeta,
        footerGroupMeta,
    ],
    fields: [
        ...commonSettings,

        // ...heroGroup.fields,
        // ...kvantumsGroup.fields,
        // ...advantagesGroup.fields,
        // ...mapGroup.fields,
        ...footerGroup.fields,
    ]
}
