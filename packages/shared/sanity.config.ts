import { defineConfig } from "sanity"
import {
    curriculumSchema,
    employeeSchema,
    kvantumSchema,
    newsSchema,
    newsTagSchema,
    portableTextSchema,
} from './src/schemas/index.ts'

export default defineConfig({
    projectId: process.env.SANITY_STUDIO_PROJECT_ID!,
    dataset: process.env.SANITY_STUDIO_DATASET!,
    schema: {
        types: [
            portableTextSchema,
            newsTagSchema,
            employeeSchema,
            kvantumSchema,
            curriculumSchema,
            newsSchema,
        ]
    },
})
