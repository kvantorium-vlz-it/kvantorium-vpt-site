import { resolve } from 'path'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {
        enabled: true,
    },

    modules: [
        "@nuxtjs/tailwindcss",
        "shadcn-nuxt",
        "@nuxtjs/color-mode",
    ],

    css: [
        './assets/css/tailwind.css',
    ],

    components: {
        dirs: [
            {
                path: '~/components/shadcn',
                prefix: 'sh',
                pathPrefix: false,
                extensions: ['vue'],
            },
            {
                path: "~/components",
                pathPrefix: false,
                ignore: ['~/components/shadcn'],
            },
        ],
    },

    tailwindcss: {
        cssPath: [
            './assets/css/tailwind.css',
            { injectPosition: "first" },
        ],
        configPath: './tailwind.config.js',
        // exposeConfig: {
        //     level: 2
        // },
        config: {
            content: [
                './components/**/*.{vue,ts}',
            ],
        },
        viewer: true,
    },

    // yandexMaps: {
    //     apikey: process.env.YANDEX_MAPS_API_KEY,
    // },

    // sanity: {
    //     projectId: process.env.NUXT_SANITY_PROJECT_ID,
    //     dataset: process.env.SANITY_DATASET,
    //     apiVersion: process.env.SANITY_API_VERSION,
    // },
})
