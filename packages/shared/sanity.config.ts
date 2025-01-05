import { defineConfig } from "sanity"

export default defineConfig({
    projectId: process.env.SANITY_STUDIO_PROJECT_ID!,
    dataset: process.env.SANITY_STUDIO_DATASET!,
    schema: {
        types: [
        ]
    },
})
