// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    modules: [
        '@vueuse/nuxt',
    ],
    css: [
        '~/assets/css/index.css',
        'modern-normalize/modern-normalize.css',
    ]
})
