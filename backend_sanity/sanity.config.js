import { defineConfig } from 'sanity'
import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { schemaTypes } from './schemas'

export default defineConfig({
    title: 'My studio',
    basePath: '/backend_sanity',
    projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
    dataset: 'production',
    plugins: [deskTool()],
    schema: {
        types: schemaTypes,
    },
})