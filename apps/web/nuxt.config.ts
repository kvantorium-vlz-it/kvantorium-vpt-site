import process from 'process'

const isDev = process.env.NODE_ENV === 'development'

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
        'vue-yandex-maps/nuxt',
        '@nuxtjs/sanity',
        '@nuxtjs/google-fonts',
        'motion-v/nuxt',
        '@vueuse/motion/nuxt',
    ],

    css: [
        './assets/css/fonts.css',
        './assets/css/tailwind.css',
    ],

    components: {
        dirs: [
            {
                path: '~/components/portable-text',
                pathPrefix: false,
                prefix: 'Portable'
            },
            {
                path: "~/components",
                pathPrefix: false,
                ignore: ['~/components/shadcn', '~/components/shared/PortableText'],
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
        configPath: './tailwind.config.ts',
        config: {
            content: [
                './components/**/*.{vue,ts}',
                './pages/**/*.{vue,ts}',
                './app.vue',
            ],
        },
        viewer: true,
    },

    googleFonts: {
        families: {
            'Exo 2': [400, 500, 600, 700]
        }
    },

    router: {
        options: {
            scrollBehaviorType: 'smooth'
        }
    },

    yandexMaps: {
        apikey: process.env.NUXT_YANDEX_MAPS_API_KEY,
    },

    sanity: {
        projectId: process.env.NUXT_SANITY_STUDIO_PROJECT_ID!,
        dataset: process.env.NUXT_SANITY_STUDIO_DATASET!,
        apiVersion: 'v2022-03-07',
    },

    // // Groqd resolving fix
    // alias: {
    //     'groqd': isDev ? '../../node_modules/groqd/dist/index.js' : 'groqd'
    // },

    compatibilityDate: '2025-02-11'
})
