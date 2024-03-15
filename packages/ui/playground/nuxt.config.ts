export default defineNuxtConfig({
    modules: ['../src/module'],
    myModule: {},
    devtools: { enabled: true },
    devServer: {
        port: 3001,
    },
})
