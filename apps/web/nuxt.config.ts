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
    ],

    css: [
        './assets/css/fonts.css',
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
        configPath: './tailwind.config.ts',
        config: {
            content: [
                './components/**/*.{vue,ts}',
            ],
        },
        viewer: true,
    },

    yandexMaps: {
        apikey: process.env.YANDEX_MAPS_API_KEY,
    },

    sanity: {
        projectId: process.env.SANITY_STUDIO_PROJECT_ID!,
        dataset: process.env.SANITY_STUDIO_DATASET!,
    }

    // sanity: {
    //     projectId: process.env.NUXT_SANITY_PROJECT_ID,
    //     dataset: process.env.SANITY_DATASET,
    //     apiVersion: process.env.SANITY_API_VERSION,
    // },
})
