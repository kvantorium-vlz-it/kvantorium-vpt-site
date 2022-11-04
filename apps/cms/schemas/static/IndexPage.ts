import { definePage } from "../../assets/ts/Page"
import { definePageSection } from "../../assets/ts/PageSection"
import { onlyUniqueFilter, requiredFieldValidation } from "../../assets/ts/utils"

const hero = definePageSection({
    group: {
        name: 'hero',
        title: 'Hero-секция',
    },
    headingAdditionalProps: {
        title: 'Заголовок "Hero-секции"'
    },
    subHeadingAdditionalProps: {
        validation: requiredFieldValidation,
        title: 'Подзаголовок "Hero-секции"'
    },
})
const kvantums = definePageSection({
    group: {
        name: 'kvantums',
        title: 'Секция с квантумами',
    },
    headingAdditionalProps: {
        title: 'Заголовок cекция с квантумами'
    },
    subHeadingAdditionalProps: {
        title: 'Подзаголовок cекция с квантумами'
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
            title: 'Квантумы, которые надо отобразить',
            of: [{ type: 'reference', to: [{ type: 'Kvantum' }] }],
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

                    return true
                }),
        }
    ]
})
const advantages = definePageSection({
    group: {
        name: 'advantages',
        title: 'Секция преимуществ',
    },
    headingAdditionalProps: {
        title: 'Заголовок секции преимуществ'
    },
    subHeadingAdditionalProps: {
        title: 'Подзаголовок секции преимуществ'
    },
    fields: [
        {
            name: 'advantagesList',
            type: 'array',
            title: 'Преимущества',
            of: [{ type: 'reference', to: [{ type: 'Advantage' }] }],
            validation: requiredFieldValidation,
        }
    ]
})
const map = definePageSection({
    group: {
        name: 'map',
        title: 'Секция с картой'
    },
    headingAdditionalProps: {
        title: 'Заголовок секции с картой'
    },
    subHeadingAdditionalProps: {
        title: 'Подзаголовок секции с картой'
    },
})

export default definePage({
    name: 'IndexPage',
    groups: [
        hero,
        kvantums,
        advantages,
        map,
    ]
})
