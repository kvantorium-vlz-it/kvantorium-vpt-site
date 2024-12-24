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

export const CURRICULUM_LEVEL = {
    INTRODUCTORY: 0,
    ADVANCED: 1,
    PROJECT: 2,
} as const

export const LINK_TYPE = {
    EXTERNAL: 0,
    INTERNAL: 1,
} as const
