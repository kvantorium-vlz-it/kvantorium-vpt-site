import { defineNuxtPlugin } from '#app'
import plugin from 'vue-yandex-maps'

const settings = {
    apiKey: '20dfd6f4-545a-43cf-b1c8-96e82339316a',
    lang: 'ru_RU',
    coordorder: 'latlong',
    debug: false,
    version: '2.1',
}

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(plugin, settings)
})
