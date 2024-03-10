import { defineField, defineType } from "sanity"

export default defineType({
    name: 'employee',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            type: 'string',
        }),
        defineField({
            name: 'surname',
            type: 'string',
        }),
        defineField({
            name: 'patronymic',
            type: 'string',
        }),
        defineField({
            name: 'description',
            type: 'string',
        }),
        defineField({
            name: 'isTeacher',
            type: 'boolean',
        }),
        defineField({
            name: 'image',
            type: 'image',
        }),
    ],
})
