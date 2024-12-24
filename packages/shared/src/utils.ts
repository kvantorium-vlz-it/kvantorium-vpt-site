import { SnakeCase, snakeCase } from "scule"

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
