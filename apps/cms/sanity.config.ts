import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { media } from 'sanity-plugin-media'

import schemas from './src/schemas'
import structure from './src/structure'

export default defineConfig({
    name: 'default',
    title: 'kvantoriumvlz',

    projectId: 'ez4gpfpj',
    dataset: 'production',

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
