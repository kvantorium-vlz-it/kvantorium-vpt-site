import { defineNuxtModule, createResolver, installModule, addComponent, addComponentsDir } from '@nuxt/kit'

// Module options TypeScript interface definition
export interface ModuleOptions {}

export default defineNuxtModule<ModuleOptions>({
    meta: {
        name: 'my-module',
        configKey: 'myModule',
    },
    // Default configuration options of the Nuxt module
    defaults: {},
    async setup(_options, _nuxt) {
        const resolver = createResolver(import.meta.url)

        // Used for adding shadcn-vue components and resolve paths
        _nuxt.options.alias['@sh-module/'] = resolver.resolve('./runtime/')
        _nuxt.options.alias['@sh-module/*'] = resolver.resolve('./runtime/*')
        _nuxt.options.css.push(resolver.resolve('./runtime/assets/css/fonts.css'))

        await installModule('@nuxtjs/tailwindcss', {
            configPath: resolver.resolve('./runtime/tailwind.config.js'),
            cssPath: resolver.resolve('./runtime/assets/css/tailwind.css'),
            config: {
                content: [
                    resolver.resolve('./runtime/shadcn/ui/**/*.{vue,ts}'),
                    resolver.resolve('./runtime/components/**/*.{vue,ts}'),
                ]
            }
        })

        await installModule('shadcn-nuxt', {
            prefix: 'sh',
            componentDir: resolver.resolve('./runtime/shadcn/ui'),
        })

        await addComponentsDir({
            path: resolver.resolve('./runtime/components'),
            pathPrefix: false,
        })

        // Do not add the extension since the `.ts` will be transpiled to `.mjs` after `npm run prepack`
        // addPlugin(resolver.resolve('./runtime/plugin'))
    },
})
