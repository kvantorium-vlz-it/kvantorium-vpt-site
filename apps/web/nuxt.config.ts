// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    modules: [
        '@vueuse/nuxt',
        'nuxt-icon',
        'floating-vue/nuxt',
        'vue-yandex-maps/nuxt',
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
        'vue-final-modal/style.css',
    ],
    yandexMaps: {
        apikey: '20dfd6f4-545a-43cf-b1c8-96e82339316a',
    },
})
