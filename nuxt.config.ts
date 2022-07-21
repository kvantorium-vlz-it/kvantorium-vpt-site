import { defineNuxtConfig } from 'nuxt'
import { api } from './cms_panel/sanity.json'

export default defineNuxtConfig({
  modules: ['@pinia/nuxt', '@nuxtjs/sanity'],

  srcDir: 'site/',

  sanity: {
    ...api
  }
})
