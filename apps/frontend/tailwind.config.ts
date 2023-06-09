import { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'
import plugin from 'tailwindcss/plugin'

export default {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./nuxt.config.{js,ts}",
        "./app.vue",
        "./assets/styles/**/*",
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
            },
            gridTemplateColumns: {
                'demo-slider': 'auto 1fr auto'
            }
        },
    },
    plugins: [
        plugin(({ addComponents }) => {
            addComponents({
                '.button': {
                    '@apply flex items-center gap-2 px-6 py-3 w-fit': {},
                    '@apply text-[24px] font-medium': {},
                    '@apply rounded-[10px] shadow-lg': {},
                    '@apply text-[#313340]': {},
                },
                '.button-yellow': {
                    '@apply bg-[#FFD685]': {},
                },
                '.button-blue': {
                    '@apply bg-[#DEE2FF]': {},
                },
            })
        })
    ],
} as Config
