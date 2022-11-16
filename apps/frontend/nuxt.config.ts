import path from 'path'

export default defineNuxtConfig({
    modules: [
        'nuxt-icons',
        '@vueuse/nuxt',
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
    }
})
