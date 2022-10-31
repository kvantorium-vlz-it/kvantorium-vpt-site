import { definePageSection } from "../../assets/ts/PageSection"
import { onlyUniqueFilter, requiredFieldValidation } from "../../assets/ts/utils"

const hero = definePageSection({
    group: {
        name: 'hero',
        title: 'Hero-секция'
    },
    subHeadingAdditionalProps: {
        validation: requiredFieldValidation,
    },
})
const kvantums = definePageSection({
    group: {
        name: 'kvantums',
        title: 'Секция с квантумами',
    },
    fields: [
        {
            name: 'kvantumsIsShowAll',
            title: 'Отображать все квантумы',
            type: 'boolean',
            validation: requiredFieldValidation,
        },
        {
            name: 'visibleKvantums',
            type: 'array',
            of: [{ type: 'reference', to: [{ type: 'Kvantum' }] }],
            options: {
                sortable: false,
            },
            hidden: ({ document }) => document.kvantumsIsShowAll,
            validation: Rule =>
                Rule.custom((visibleKvantums, context) => {
                    // If field not needed stop validation
                    if (context.parent.kvantumsIsShowAll) {
                        return true
                    }

                    if (!visibleKvantums) {
                        return 'Необходимо указать квантумы'
                    }

                    // Check length
                    if (visibleKvantums.length < 2) {
                        return 'Необходимо указать минимум 2 квантума'
                    }

                    const unique = visibleKvantums
                        .map(kvantum => kvantum['_ref'])
                        .filter(onlyUniqueFilter)

                    // Check unique kvantums
                    if (unique.length !== visibleKvantums.length) {
                        return 'Квантумы не могут повторяться'
                    }
                }),
        }
    ]
})
const advantages = definePageSection({
    group: {
        name: 'advantages',
        title: 'Секция преимуществ',
    },
    fields: [
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
            validation: requiredFieldValidation,
        }
    ]
})
const map = definePageSection({
    group: {
        name: 'map',
        title: 'Секция с картой'
    }
})

export default {
    name: 'IndexPage',
    type: 'document',
    groups: [
        hero.group,
        kvantums.group,
        advantages.group,
        map.group,
    ],
    fields: [
        ...hero.fields,
        ...kvantums.fields,
        ...advantages.fields,
        ...map.fields,
    ]
}
