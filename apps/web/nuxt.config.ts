import { MetaConstants } from 'shared/constants'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    modules: [
        '@vueuse/nuxt',
        'nuxt-icon',
        'floating-vue/nuxt',
        'vue-yandex-maps/nuxt',
        '@nuxtjs/sanity',
        'ui',
    ],
    components: {
        dirs: [
            {
                path: "~/components",
                pathPrefix: false,
            }
        ]
    },
    css: [
        'modern-normalize/modern-normalize.css',
        'vue-final-modal/style.css',
        '~/assets/css/index.css',
    ],
    yandexMaps: {
        apikey: process.env.YANDEX_MAPS_API_KEY,
    },
    sanity: {
        projectId: process.env.SANITY_PROJECT_ID,
        dataset: process.env.SANITY_DATASET,
        apiVersion: MetaConstants.SANITY_API_VERSION,
    }
})
