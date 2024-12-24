import { arrayToConstants } from "./utils.js"

const SCHEMA_PREFIX = 'kvantorium' as const

export const DOCUMENT_TYPES = arrayToConstants([
    'kvantum',
    'employee',
    'curriculum',
    'newsTag',
    'news',
] as const, SCHEMA_PREFIX)

export const OBJECT_TYPES = arrayToConstants([
    'portableText',
] as const, SCHEMA_PREFIX)
