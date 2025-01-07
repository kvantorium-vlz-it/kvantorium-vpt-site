import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { media } from 'sanity-plugin-media'

import schemas from './src/schemas'
import structure from './src/structure'

import { ruKZLocale } from '@sanity/locale-ru-kz'

import {
    curriculumSchema,
    employeeSchema,
    kvantumSchema,
    newsSchema,
    newsTagSchema,
    portableTextSchema,
} from '@kvantoriumvlz/shared/schemas'
import { defineConfig } from 'sanity'

export default defineConfig({
    name: 'default',
    title: 'kvantoriumvlz',

    projectId: process.env.SANITY_STUDIO_PROJECT_ID!,
    dataset: process.env.SANITY_STUDIO_DATASET!,

    plugins: [
        structureTool({
            // structure: structure
        }),
        visionTool(),
        media(),
        ruKZLocale(),
    ],

    schema: {
        types: [
            curriculumSchema,
            employeeSchema,
            kvantumSchema,
            newsSchema,
            newsTagSchema,
            portableTextSchema,
        ]
        // types: schemas
    },
})
