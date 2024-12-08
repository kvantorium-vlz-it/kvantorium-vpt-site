import { resolve } from 'path'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {
        enabled: true,
    },

    modules: [
        '@vueuse/nuxt',
        "@nuxtjs/color-mode",
        "@nuxtjs/tailwindcss",
        "shadcn-nuxt",
    ],

    css: [
        './assets/css/tailwind.css',
    ],

    components: {
        dirs: [
            {
                path: "~/components",
                pathPrefix: false,
                ignore: ['~/components/shadcn'],
            },
        ],
    },

    shadcn: {
        componentDir: './components/shadcn',
        prefix: 'sh',
    },

    tailwindcss: {
        cssPath: [
            './assets/css/tailwind.css',
            { injectPosition: "first" },
        ],
        configPath: './tailwind.config.js',
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
