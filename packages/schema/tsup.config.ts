import { defineConfig } from 'tsup'

export default defineConfig((options) => ({
    entry: [
        './src/index.ts',
    ],
    publicDir: "./src/.schema",
    dts: true,
    minify: !!!options.watch,
    outDir: 'dist',
    sourcemap: !!options.watch,
    clean: !!!options.watch,
    format: ['cjs', 'esm'],
}))
