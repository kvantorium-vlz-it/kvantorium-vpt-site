import { SnakeCase, snakeCase } from "scule"
import { CURRICULUM_LEVEL } from "./constants.js"

type ConstantsObject<
    C extends ReadonlyArray<string>,
    P extends string
> = {
    readonly [K in C[number] as Uppercase<SnakeCase<K>>]: `${P}.${K}`
}

export const arrayToConstants = <
    C extends ReadonlyArray<string>,
    P extends string
>(constants: C, prefix: P) => {
    return constants.reduce((constants, constant) => ({
        ...constants,
        [snakeCase(constant).toUpperCase()]: `${prefix}.${constant}`
    }), {}) as ConstantsObject<C, P>
}

export const getCurriculumLevelLabel = (
    level: typeof CURRICULUM_LEVEL[keyof typeof CURRICULUM_LEVEL]
) => {
    if (level === CURRICULUM_LEVEL.INTRODUCTORY) {
        return 'вводный'
    } else if (level === CURRICULUM_LEVEL.ADVANCED) {
        return 'углубленный'
    } else {
        return 'проектный'
    }
}
