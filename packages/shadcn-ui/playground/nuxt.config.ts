export default defineNuxtConfig({
    modules: ['../src/module'],
    myModule: {},
    devtools: { enabled: true },
    plugins: ['~/plugins/curseur.client.ts'],
    css: ['curseur-vif/style.css'],
    compatibilityDate: '2024-10-31'
})
