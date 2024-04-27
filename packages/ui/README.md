# @kvantorium-vlz-ru/ui

[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]

UI kit for kvantoriumvlz web app.

<!-- - [✨ &nbsp;Release Notes](/CHANGELOG.md) -->
<!-- - [🏀 Online playground](https://stackblitz.com/github/your-org/my-module?file=playground%2Fapp.vue) -->
<!-- - [📖 &nbsp;Documentation](https://example.com) -->

## Components file structure

- data - folder for storing components for data visualization
- layout - folder for storing components for creating page layouts
  - grid - 12 columns grid system components
- ui - folder for storing various components that builds ui
  - accordion - components for building accordion
  - button - links and buttons components
  - collapsible - components for building collapsible
  - icon - icon components
  - swiper - components for building swiper

## Quick Setup

1. Add `ui` dependency to your project

```bash
# Using pnpm
pnpm add -D ui

# Using yarn
yarn add --dev ui

# Using npm
npm install --save-dev ui
```

2. Add `ui` to the `modules` section of `nuxt.config.ts`

```js
export default defineNuxtConfig({
  modules: [
    'ui'
  ]
})
```

## Development

```bash
# Install dependencies
npm install

# Develop with the playground
npm run dev

# Build the playground
npm run dev:build
```

<!-- Badges -->

[license-src]: https://img.shields.io/npm/l/my-module.svg?style=flat&colorA=020420&colorB=00DC82
[license-href]: https://npmjs.com/package/my-module

[nuxt-src]: https://img.shields.io/badge/Nuxt-020420?logo=nuxt.js
[nuxt-href]: https://nuxt.com
