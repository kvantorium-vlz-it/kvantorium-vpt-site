import { CURRICULUM_LEVEL } from "@constants"

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

// Bug:Break import on @kvantoriumvlz/cms

// export const constantsFromArray = <
//     C extends ReadonlyArray<string>,
//     P extends ReadonlyArray<string> = [],
//     S extends string = '.'
// >(constants: C, prefixes?: P, separator?: S) => {
//     const joinedPrefixes = (prefixes || []).join(separator || '.')
//     const isPrefixesDefined = (prefixes || []).length > 0

//     return constants.reduce(
//         (constants, constant) => ({
//             ...constants,
//             [snakeCase(constant).toUpperCase()]: (isPrefixesDefined
//                 ? `${joinedPrefixes}${separator || '.'}${constant}`
//                 : constant
//             )
//         }),
//         {}
//     ) as ConstantsFromArray<C, P, S>
// }

// export type ConstantsFromArray<
//     C extends ReadonlyArray<string>,
//     P extends ReadonlyArray<string>,
//     S extends string = '.'
// > = {
//     [K in C[number] as Uppercase<SnakeCase<K>>]: (
//         JoinByCase<P, S> extends ""
//             ? K
//             : `${JoinByCase<P, S>}${S}${K}`
//     )
// }
