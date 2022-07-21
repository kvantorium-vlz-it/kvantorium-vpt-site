/**
 * @type {import('tailwindcss').Config}
 */
module.exports = {
  content: [
    './site/assets/**/*.{vue,js,css}',
    './site/components/**/*.{vue,js}',
    './site/layouts/**/*.vue',
    './site/pages/**/*.vue',
    './site/plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
