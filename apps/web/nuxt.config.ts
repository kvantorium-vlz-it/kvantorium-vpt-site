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
    typescript: {
        includeWorkspace: true,
        tsConfig: {
            include: ["@kvantorium-vpt-site/tsconfig/enviroments.d.ts"]
        }
    },
    yandexMaps: {
        apikey: process.env.YANDEX_MAPS_API_KEY,
    },
    sanity: {
        projectId: process.env.NUXT_SANITY_PROJECT_ID,
        dataset: process.env.SANITY_DATASET,
        apiVersion: process.env.SANITY_API_VERSION,
    },
})
