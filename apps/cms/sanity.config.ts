import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemaTypes'
import { myStructure } from './deskStructure'
import { media } from 'sanity-plugin-media'
import schemas from './src/schemas'

export default defineConfig({
    name: 'default',
    title: 'kvantoriumvlz',

    projectId: 'ez4gpfpj',
    dataset: 'production',

    plugins: [
        structureTool({
            structure: myStructure
        }),
        visionTool(),
        media(),
    ],

    schema: {
        types: [...schemaTypes, ...schemas]
    },
})
