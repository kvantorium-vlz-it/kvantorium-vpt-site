// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    modules: [
        '@vueuse/nuxt',
        'nuxt-icon',
    ],
    components: {
        dirs: [
            {
                path: "~/components",
                pathPrefix: false,
            }
        ]
    },
    css: [
        '~/assets/css/index.css',
        'modern-normalize/modern-normalize.css',
    ]
})
