import path from 'path'
import { api } from './cms_panel/sanity.json'

export default defineNuxtConfig({
    modules: [
        '@pinia/nuxt',
        '@nuxtjs/sanity',
        '@vueuse/nuxt',
        'nuxt-icons',
        '@vueuse/nuxt',
    ],

    css: [
        'modern-normalize/modern-normalize.css',
        '@/assets/css/main.scss',
        '@styles/main.scss',
    ],

    components: {
        dirs: [
            { path: '@/components', pathPrefix: false }
        ]
    },

    alias: {
        '@styles': path.join(__dirname, 'assets', 'styles'),
    },

    sanity: {
        ...api
    },

    postcss: {
        plugins: {
            'postcss-import': {},
            'postcss-url': {},
            'postcss-nested': {},
            autoprefixer: {},
            cssnano: true
        }
    },
})
