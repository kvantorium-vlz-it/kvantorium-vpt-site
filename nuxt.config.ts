import { defineNuxtConfig } from 'nuxt'
import { api } from './cms_panel/sanity.json'

export default defineNuxtConfig({
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/sanity',
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
  ],

  css: [
    '@/assets/scss/main.css',
  ],

  components: {
    dirs: [
      { path: '@/components', pathPrefix: false }
    ]
  },

  sanity: {
    ...api
  },

  /**
   * return "true" when nuxt 3 fix issue with "_tailwind" route
   */
  tailwindcss: {
    viewer: false
  }
})
