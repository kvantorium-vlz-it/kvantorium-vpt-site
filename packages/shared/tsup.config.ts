import { defineConfig } from 'tsup'

export default defineConfig((options) => ({
    entry: [
        './src/constants.ts',
        './src/utils.ts',
        './src/index.ts',
    ],
    dts: true,
    minify: !!!options.watch,
    outDir: 'dist',
    sourcemap: !!options.watch,
    clean: !!!options.watch,
    format: ['cjs', 'esm'],
}))
