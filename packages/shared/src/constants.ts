const SCHEMA_PREFIX = 'kvantorium' as const

export const DOCUMENT_TYPES = {
    PORTABLE_TEXT: `${SCHEMA_PREFIX}.portableText`,
    LINK: `${SCHEMA_PREFIX}.link`,
    INTERNAL_LINK: `${SCHEMA_PREFIX}.internalLink`,
    EXTERNAL_LINK: `${SCHEMA_PREFIX}.externalLink`,
    NEWS_TAG: `${SCHEMA_PREFIX}.newsTag`,
    EMPLOYEE: `${SCHEMA_PREFIX}.employee`,
    KVANTUM: `${SCHEMA_PREFIX}.kvantum`,
    CURRICULUM: `${SCHEMA_PREFIX}.curriculum`,
    NEWS: `${SCHEMA_PREFIX}.news`,
    SETTINGS: `${SCHEMA_PREFIX}.settings`,
} as const

export const CURRICULUM_LEVEL = {
    INTRODUCTORY: 0,
    ADVANCED: 1,
    PROJECT: 2,
} as const

export const CONTACT_LINK_TYPE = {
    EMAIL: 'email',
    WEBSITE: 'website',
    GEOLOCATION: 'geolocation',
    PHONE: 'phone',
    OTHER: 'other',
} as const
