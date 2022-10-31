const SCOPE_FLAGS = [
    'isTeacher',
] as const

export const POSITION_SCOPES: IPositionScopes = {
    isTeacher: {
        title: 'преподаватель',
        description: 'занимается ли проведением занятий сотрудник данной должности',
    },
}

// =================
// Types for flags
// =================

export type Flags = typeof SCOPE_FLAGS[number]

interface IPositionScope {
    title: string;
    description?: string;
    initialValue?: boolean;
}

type IPositionScopes = {
    [key in Flags]: IPositionScope;
}

/**
 * Flags for staff position scope flags
 */
export const STAFF_POSITION_SCOPE_FLAGS = Object.entries(POSITION_SCOPES)
    .map(([scopeName, { title, description, initialValue }]) => {
        return {
            name: scopeName,
            type: 'boolean',
            title,
            description,
            initialValue: initialValue || false,
        }
    })
