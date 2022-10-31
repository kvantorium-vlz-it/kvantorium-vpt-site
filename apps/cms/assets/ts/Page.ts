import { definePageSection } from './PageSection'
import { Fields, IAdditionalProps, IField, IGroup, IPage } from './types';

type IPageGroup = ReturnType<typeof definePageSection> | IGroup

interface IPageOptions {
    name: string;
    groups?: IPageGroup[];
    fields?: Fields;
    additionalProps?: IAdditionalProps;
}

const isDefinedPageSection = (
    group: IPageGroup
): group is ReturnType<typeof definePageSection> => {
    return 'group' in group
}

const isRawGroup = (group: IPageGroup): group is IGroup => !isDefinedPageSection(group)

export const definePage = (options: IPageOptions) => {
    const definedPageGroups = options.groups.filter(isDefinedPageSection)
    const rawGroups: IGroup[] = options.groups.filter(isRawGroup)

    const schema: IPage = {
        ...options.additionalProps,
        name: options.name,
        type: 'document',
        groups: [],
        fields: [
            {
                name: 'pageTab',
                type: 'string',
                title: 'Надпись страницы во вкладках браузера'
            }
        ],
    }

    if (options.fields) {
        schema.fields.push(...options.fields)
    }

    if (rawGroups) {
        schema.groups.push(...rawGroups)
    }
    if (definedPageGroups) {
        schema.groups.push(...definedPageGroups.map(group => group.group))
        schema.fields.push(...definedPageGroups.map(group => group.fields).flat(2))
    }

    const staticPageItemId = `${options.name}Item`

    return {
        schema,
        staticPageItemId,
        name: options.name,
    }
}
