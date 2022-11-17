import path from 'path'

export default defineNuxtConfig({
    modules: [
        'nuxt-icons',
        '@vueuse/nuxt',
        '@nuxtjs/sanity',
        '@pinia/nuxt',
    ],

    css: [
        'modern-normalize',
        '@styles/main.scss',
        'swiper/css',
    ],

    components: {
        dirs: [
            { path: 'components', pathPrefix: false },
        ]
    },

    alias: {
        '@styles': path.join(__dirname, 'assets', 'styles'),
    },

    sanity: {
        projectId: 'bf6yq4p9',
        apiVersion: '2021-10-18',
        dataset: process.env.NODE_ENV === 'development'
            ? 'develop'
            : 'production',
    }
})
