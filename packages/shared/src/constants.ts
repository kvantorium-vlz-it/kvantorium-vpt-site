import { SnakeCase, snakeCase } from "scule"

type ConstantsObject<
    C extends ReadonlyArray<string>,
    P extends string
> = {
    readonly [K in C[number] as Uppercase<SnakeCase<K>>]: `${P}.${K}`
}

const arrayToConstants = <
    C extends ReadonlyArray<string>,
    P extends string
>(constants: C, prefix: P) => {
    return constants.reduce((constants, constant) => ({
        ...constants,
        [snakeCase(constant).toUpperCase()]: `${prefix}.${constant}`
    }), {}) as ConstantsObject<C, P>
}

const SCHEMA_PREFIX = 'kvantorium' as const

export const DOCUMENT_TYPES = arrayToConstants([
    'kvantum',
    'employee',
    'curriculum',
    'newsTag',
    'news',
    'portableText',
] as const, SCHEMA_PREFIX)

export const CURRICULUM_LEVEL = {
    INTRODUCTORY: 0,
    ADVANCED: 1,
    PROJECT: 2,
} as const

export const LINK_TYPE = {
    EXTERNAL: 0,
    INTERNAL: 1,
} as const
