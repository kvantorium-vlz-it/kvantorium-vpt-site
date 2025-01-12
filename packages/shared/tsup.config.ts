import { defineConfig } from 'tsup'

export default defineConfig((options) => ({
    entry: [
        // './src/.shared/schema.json',
        // './src/.shared/sanity.types.ts',
        './src/constants.ts',
        './src/utils.ts',
        './src/query-builder/groqd.client.ts',
        './src/query-builder/fragments/index.ts',
        './src/query-builder/queries/index.ts',
        './src/query-builder/index.ts',
        './src/schemas/index.ts',
        './src/index.ts',
    ],
    publicDir: "./src/.shared",
    dts: true,
    minify: !!!options.watch,
    outDir: 'dist',
    sourcemap: !!options.watch,
    clean: !!!options.watch,
    format: ['cjs', 'esm'],
}))
