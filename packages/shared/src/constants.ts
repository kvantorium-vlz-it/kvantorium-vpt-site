import { constantsFromArray } from "./utils"

const SCHEMA_PREFIX = 'kvantorium' as const

export const DOCUMENT_TYPES = constantsFromArray([
    'portableText',
    'link',
    'internalLink',
    'externalLink',
    'newsTag',
    'employee',
    'kvantum',
    'curriculum',
    'news',
] as const, [SCHEMA_PREFIX] as const)

export const CURRICULUM_LEVEL = {
    INTRODUCTORY: 0,
    ADVANCED: 1,
    PROJECT: 2,
} as const
