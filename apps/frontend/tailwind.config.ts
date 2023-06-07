import { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

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
        fontFamily: {
            'sans': ['Montserrat Variable', ...defaultTheme.fontFamily.sans]
        },
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
        extend: {
            gridTemplateRows: {
                'layout': 'auto 1fr auto',
            }
        },
    },
    plugins: [],
} as Config
