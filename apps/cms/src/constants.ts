import { snakeCase, SnakeCase } from "scule"

const CONSTANTS_PREFIX = 'kvantorium' as const

const arrayToConstants = <C extends ReadonlyArray<string>>(constants: C) => {
    return constants.reduce((constants, constant) => ({
        ...constants,
        [snakeCase(constant).toUpperCase()]: `${CONSTANTS_PREFIX}.${constant}`
    }), {}) as {
        [K in C[number] as Uppercase<SnakeCase<K>>]: `${typeof CONSTANTS_PREFIX}.${K}`
    }
}

const RAW_DOCUMENT_TYPES = ['kvantum'] as const
const RAW_OBJECT_TYPES = ['portableText'] as const

export const DOCUMENT_TYPES = arrayToConstants(RAW_DOCUMENT_TYPES)
export const OBJECT_TYPES = arrayToConstants(RAW_OBJECT_TYPES)
