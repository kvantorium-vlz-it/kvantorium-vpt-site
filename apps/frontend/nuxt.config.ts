import path from 'path'

export default defineNuxtConfig({
    css: [
        'modern-normalize',
        '@styles/main.scss',
    ],

    alias: {
        '@styles': path.join(__dirname, 'assets', 'styles'),
    }
})
