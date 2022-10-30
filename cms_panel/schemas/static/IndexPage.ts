import { onlyUniqueFilter, requiredFieldValidation } from "../../assets/ts/utils"

const heroGroupMeta = {
    name: 'hero',
    title: 'Hero-секция',
}
const kvantumsGroupMeta = {
    name: 'kvantums',
    title: 'Секция с квантумами',
}
const advantagesGroupMeta = {
    name: 'advantages',
    title: 'Секция преимуществ',
}
const mapGroupMeta = {
    name: 'map',
    title: 'Секция с картой'
}

const heroGroup = {
    name: heroGroupMeta.name,
    title: heroGroupMeta.title,
    fields: [
        {
            name: 'heroHeading',
            type: 'string',
            group: heroGroupMeta.name,
            validation: requiredFieldValidation,
        },
        {
            name: 'heroSubHeading',
            type: 'string',
            group: heroGroupMeta.name,
            validation: requiredFieldValidation,
        }
    ]
}
const kvantumsGroup = {
    name: kvantumsGroupMeta.name,
    title: kvantumsGroupMeta.title,
    fields: [
        {
            name: 'kvantumsHeading',
            type: 'string',
            group: kvantumsGroupMeta.name,
            validation: requiredFieldValidation,
        },
        {
            name: 'kvantumsSubheading',
            type: 'string',
            group: kvantumsGroupMeta.name,
        },
        {
            name: 'isShowAll',
            title: 'Отображать все квантумы',
            type: 'boolean',
            group: kvantumsGroupMeta.name,
            validation: requiredFieldValidation,
        },
        {
            name: 'visibleKvantums',
            type: 'array',
            of: [{ type: 'reference', to: [{ type: 'Kvantum' }] }],
            group: kvantumsGroupMeta.name,
            options: {
                sortable: false,
            },
            hidden: ({ document }) => document.isShowAll,
            validation: Rule =>
                Rule.custom((visibleKvantums, context) => {
                    // If field not needed stop validation
                    if (context.parent.isShowAll) {
                        return true
                    }

                    // Check length
                    if (visibleKvantums.length < 2) {
                        return 'Необходимо указать минимум 2 квантума'
                    }

                    const unique = visibleKvantums.filter(onlyUniqueFilter)

                    // Check unique kvantums
                    if (unique.length !== visibleKvantums.length) {
                        return 'Квантумы не могут повторяться'
                    }
                }),
        }
    ]
}
const advantagesGroup = {
    name: advantagesGroupMeta.name,
    title: advantagesGroupMeta.title,
    fields: [
        {
            name: 'advantagesHeading',
            type: 'string',
            group: advantagesGroupMeta.name,
            validation: requiredFieldValidation,
        },
        {
            name: 'advantagesSubHeading',
            type: 'string',
            group: advantagesGroupMeta.name,
        },
        {
            name: 'list',
            type: 'array',
            of: [
                {
                    name: 'advantage',
                    type: 'object',
                    fields: [
                        {
                            name: 'title',
                            type: 'string',
                            validation: requiredFieldValidation,
                        },
                        {
                            name: 'description',
                            type: 'string',
                            validation: requiredFieldValidation,
                        },
                        {
                            name: 'image',
                            type: 'image',
                            validation: requiredFieldValidation,
                        }
                    ]
                }
            ],
            group: advantagesGroupMeta.name,
            validation: requiredFieldValidation,
        }
    ]
}
const mapGroup = {
    name: mapGroupMeta.name,
    title: mapGroupMeta.title,
    fields: [
        {
            name: 'mapHeading',
            type: 'string',
            group: mapGroupMeta.name,
            validation: requiredFieldValidation,
        },
        {
            name: 'mapSubTitle',
            type: 'string',
            group: mapGroupMeta.name,
        },
    ]
}

export default {
    name: 'IndexPage',
    type: 'document',
    groups: [
        heroGroupMeta,
        kvantumsGroupMeta,
        advantagesGroupMeta,
        mapGroupMeta,
    ],
    fields: [
        ...heroGroup.fields,
        ...kvantumsGroup.fields,
        ...advantagesGroup.fields,
        ...mapGroup.fields,
    ]
}
