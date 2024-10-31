import { curseurPlugin } from 'curseur-vif'

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(curseurPlugin, {})
})
