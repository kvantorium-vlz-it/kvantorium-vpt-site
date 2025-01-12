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

export const CURRICULUM_LEVEL = {
    INTRODUCTORY: 1,
    ADVANCED: 2,
    PROJECT: 3,
} as const

export const API_VERSION = "v2022-03-07"
