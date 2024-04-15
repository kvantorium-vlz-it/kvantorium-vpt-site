import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { media } from 'sanity-plugin-media'

import schemas from './src/schemas'
import structure from './src/structure'

export default defineConfig({
    name: 'default',
    title: 'kvantoriumvlz',

    projectId: process.env.SANITY_PROJECT_ID || '',
    dataset: process.env.SANITY_DATASET || '',

    plugins: [
        structureTool({
            structure: structure
        }),
        visionTool(),
        media(),
    ],

    schema: {
        types: schemas
    },
})
