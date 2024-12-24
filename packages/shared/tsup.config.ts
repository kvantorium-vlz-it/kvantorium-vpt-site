import { defineConfig } from 'tsup'

export default defineConfig((options) => {
    return {
        entry: [
            'src/index.ts',
        ],
        outDir: 'dist',
        clean: !options.watch,
        dts: true,
        minify: !options.watch,
        format: [/*'cjs',*/ 'esm'],
        sourcemap: !!options.watch,
        treeshake: !options.watch,
    }
})
