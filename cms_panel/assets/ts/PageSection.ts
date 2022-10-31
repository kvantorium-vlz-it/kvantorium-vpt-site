import { IAdditionalProps, IField, IGroup } from './types';
import { requiredFieldValidation } from './utils'

interface IPageSEctionFieldOptions {
    field: IField;
    section: string;
    additionalProps?: IAdditionalProps;
}

interface IPageSectionHeadingOptions {
    section: string,
    additionalProps?: IAdditionalProps,
}

interface IPageSectionSubHeadingOptions {
    section: string;
    additionalProps?: IAdditionalProps;
}

type PageSectionFields = (IField & IAdditionalProps)[]

interface IPageSection {
    group: IGroup;
    headingAdditionalProps?: IAdditionalProps;
    subHeadingAdditionalProps?: IAdditionalProps;
    fields?: PageSectionFields;
}

export const definePageSectionField = (options: IPageSEctionFieldOptions) => ({
    ...options.additionalProps,
    ...options.field,
    group: options.section,
})

export const definePageSectionHeading = (
    options: IPageSectionHeadingOptions
) => definePageSectionField({
    additionalProps: {
        ...options.additionalProps,
        validation: requiredFieldValidation,
    },
    field: {
        name: `${options.section}Heading`,
        type: 'string',
    },
    section: options.section,
})

export const definePageSectionSubHeading = (
    options: IPageSectionSubHeadingOptions,
) => definePageSectionField({
    additionalProps: options.additionalProps,
    field: {
        name: `${options.section}SubHeading`,
        type: 'string',
    },
    section: options.section,
})

export const definePageSection = (options: IPageSection) => {
    const {
        group,
        headingAdditionalProps,
        subHeadingAdditionalProps,
        fields,
    } = options

    const { name: section } = group

    const heading = definePageSectionHeading({
        section,
        additionalProps: headingAdditionalProps,
    })
    const subHeading = definePageSectionSubHeading({
        section,
        additionalProps: subHeadingAdditionalProps,
    })

    const _fields: PageSectionFields = [
        heading,
        subHeading,
    ]

    if (fields) {
        _fields.push(
            ...fields.map(field => definePageSectionField({
                field,
                section,
            }))
        )
    }

    return {
        group,
        fields: _fields
    }
}
