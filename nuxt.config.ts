import { defineNuxtConfig } from 'nuxt'
import { api } from './cms_panel/sanity.json'

export default defineNuxtConfig({
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/sanity',
    '@vueuse/nuxt',
    'nuxt-icons',
  ],

  css: [
    'modern-normalize/modern-normalize.css',
    '@/assets/css/main.scss',
  ],

  components: {
    dirs: [
      { path: '@/components', pathPrefix: false }
    ]
  },

  sanity: {
    ...api
  },

  postcss: {
    plugins: {
      "postcss-import": {},
      "postcss-url": {},
      "postcss-nested": {},
      "autoprefixer": {},
      "cssnano": true
    }
  },
})
