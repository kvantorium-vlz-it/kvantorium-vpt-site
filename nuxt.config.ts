import { defineNuxtConfig } from 'nuxt'
import { api } from './cms_panel/sanity.json'

export default defineNuxtConfig({
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/sanity',
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
  ],

  srcDir: 'site/',

  css: [
    '@/assets/scss/main.css',
  ],

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
