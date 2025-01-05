import { defineConfig } from 'tsup'

export default defineConfig((options) => ({
    entry: [
        // './src/.shared/schema.json',
        // './src/.shared/sanity.types.ts',
        './src/constants.ts',
        './src/utils.ts',
        './src/groq/groqd.client.ts',
        './src/groq/fragments/index.ts',
        './src/groq/queries/index.ts',
        './src/groq/index.ts',
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
