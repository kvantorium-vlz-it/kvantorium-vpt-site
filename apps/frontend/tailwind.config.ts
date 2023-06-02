import { Config } from 'tailwindcss'

export default {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./nuxt.config.{js,ts}",
        "./app.vue",
    ],
    theme: {
        screens: {
            'desktop': '1720px'
        },
        container: {
            center: true,
            padding: {
                'DEFAULT': '0.5rem',
                'desktop': '0.75rem',
            },
        },
        extend: {},
    },
    plugins: [],
} as Config
