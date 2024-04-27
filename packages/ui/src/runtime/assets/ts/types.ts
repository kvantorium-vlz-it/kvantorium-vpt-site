import type { RouterLinkProps } from "#vue-router"

export type UnionWithType<T, K> = T | (K & {})

export type UnionStringLiteralsWithString<L extends string> = L | (string & {})

export type UnionStringLiteralsWithNumber<L extends string> = L | (number & {})

export type LinkProps = Omit<RouterLinkProps, 'to'>
    & {
        to?: RouterLinkProps['to']
    }
