import { s } from '@sanity-typed/schema-builder'

export const file = s.document({
    name: 'File',
    fields: [
        {
            name: 'label',
            type: s.string({
                validation: (rule) => rule.required(),
            }),
        },
        {
            name: 'file',
            type: s.file({
                validation: (rule) => rule.required(),
            }),
        },
        {
            name: 'isCurriculum',
            type: s.boolean({
                initialValue: false,
            }),
        },
    ],
    preview: {
        select: {
            title: 'label',
        }
    }
})

export type File = s.infer<typeof file>
