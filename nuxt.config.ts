import { defineNuxtConfig } from 'nuxt'
import { api } from './cms_panel/sanity.json'

export default defineNuxtConfig({
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/sanity',
    '@vueuse/nuxt',
  ],

  css: [
    '@/assets/scss/main.css',
    'modern-normalize/modern-normalize.css',
  ],

  components: {
    dirs: [
      { path: '@/components', pathPrefix: false }
    ]
  },

  sanity: {
    ...api
  },
})
