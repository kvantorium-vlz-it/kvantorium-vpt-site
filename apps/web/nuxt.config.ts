// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    modules: [
        '@vueuse/nuxt',
        'nuxt-icon',
        'floating-vue/nuxt',
        'vue-yandex-maps/nuxt',
        '@nuxtjs/sanity',
        'ui',
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
        'modern-normalize/modern-normalize.css',
        'vue-final-modal/style.css',
        '~/assets/css/index.css',
    ],
    yandexMaps: {
        apikey: '20dfd6f4-545a-43cf-b1c8-96e82339316a',
    },
    sanity: {
        projectId: 'ez4gpfpj',
        dataset: 'production',
        apiVersion: '2022-03-07',
    }
})
