import process from 'process'

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
      '@nuxtjs/google-fonts'
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
            'Exo 2': {
                wght: [400, 700],
                subsets: ['cyrillic', 'cyrillic-ext', 'latin', 'latin-ext']
            }
        }
    },

    yandexMaps: {
        apikey: process.env.YANDEX_MAPS_API_KEY,
    },

    sanity: {
        projectId: process.env.SANITY_STUDIO_PROJECT_ID!,
        dataset: process.env.SANITY_STUDIO_DATASET!,
        apiVersion: 'v2022-03-07',
    },

    // Groqd resolving fix
    alias: {
        'groqd': '../node_modules/groqd/dist/index'
    }
})
