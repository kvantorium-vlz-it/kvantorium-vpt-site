import path from 'path'

export default defineNuxtConfig({
    modules: [
        'nuxt-icons',
        'nuxt-icon',
        '@vueuse/nuxt',
        '@nuxtjs/sanity',
        '@pinia/nuxt',
    ],

    css: [
        'modern-normalize',
        '@styles',
        'swiper/css',
    ],

    components: {
        dirs: [
            { path: 'components', pathPrefix: false },
        ]
    },

    alias: {
        '@styles': path.resolve(__dirname, path.join('assets', 'styles', 'main.scss')),
        '@types': path.resolve(__dirname, path.join('assets', 'typescript', 'types.ts'))
    },

    sanity: {
        projectId: process.env.SANITY_STUDIO_PROJECT_ID,
        dataset: process.env.SANITY_STUDIO_DATASET,
    },

    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
})
