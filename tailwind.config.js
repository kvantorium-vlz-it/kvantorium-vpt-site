const plugin = require('tailwindcss/plugin');

/**
 * @type { import('tailwindcss').Config }
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
    colors: {
      primary: {
        300: '#E7ECF5',
        400: '#7689BB',
        DEFAULT: '#234293',
        600: '#1E397E',
        700: '#17306F',
        800: '#0E224A',
      },
      promo: '#000017',
      white: '#FAFAFA',
      black: '#000000',
      auto: 'auto',
      transparent: 'transparent',
      inherit: 'inherit',
    },
    fontSize: {
      body16: ['1rem', 1.25],
      body20: ['1.25rem', 1.25],
      body24: ['1.5rem', 1.25],
      heading32: ['2rem', 1.5],
      heading36: ['2.25rem', 1.5],
      heading40: ['2.5rem', 1.5],
      heading64: ['4rem', 1.5],
    },
    extend: {},
  },
  plugins: [
    plugin(({ addComponents, theme }) => {
      addComponents({
        '.header-gradient': {
          '@apply bg-gradient-to-t from-primary to-primary-800': {}
        },
        '.kvantum-card-gradient': {
          '@apply bg-gradient-to-t from-white to-primary-300': {},
        },
      })
    })
  ],
}
