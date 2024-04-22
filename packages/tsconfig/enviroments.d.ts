declare global {
    namespace NodeJS {
        interface ProcessEnv {
            SANITY_PROJECT_ID: string
            SANITY_DATASET: 'production' | 'development'
            SANITY_API_VERSION: string
            YANDEX_MAPS_API_KEY: string

            SANITY_STUDIO_PROJECT_ID: ProcessEnv['SANITY_PROJECT_ID']
            SANITY_STUDIO_DATASET: ProcessEnv['SANITY_DATASET']
            SANITY_STUDIO_API_VERSION: ProcessEnv['SANITY_API_VERSION']

            NUXT_SANITY_PROJECT_ID: ProcessEnv['SANITY_PROJECT_ID']
            NUXT_SANITY_DATASET: ProcessEnv['SANITY_DATASET']
            NUXT_SANITY_API_VERSION: ProcessEnv['SANITY_API_VERSION']
        }
    }
}

export {}
