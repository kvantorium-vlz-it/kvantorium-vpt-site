import { defineNuxtModule, addPlugin, createResolver, addComponentsDir, addImportsDir, installModule, addImports } from '@nuxt/kit'

// Module options TypeScript interface definition
export interface ModuleOptions {}

export default defineNuxtModule<ModuleOptions>({
    meta: {
        name: 'my-module',
        configKey: 'myModule'
    },
    // Default configuration options of the Nuxt module
    defaults: {},
    async setup (options, nuxt) {
        const resolver = createResolver(import.meta.url)

        await installModule('nuxt-icon')
        await installModule('@vueuse/nuxt')

        addImportsDir(resolver.resolve('runtime/assets/fonts'))

        nuxt.options.css.push(resolver.resolve('runtime/assets/css/index.css'))

        addComponentsDir({
            path: resolver.resolve('runtime/components'),
            prefix: 'k',
            pathPrefix: false,
        })

        addImportsDir(resolver.resolve('runtime/composables'))

        // Do not add the extension since the `.ts` will be transpiled to `.mjs` after `npm run prepack`
        addPlugin(resolver.resolve('./runtime/plugin'))
    }
})
