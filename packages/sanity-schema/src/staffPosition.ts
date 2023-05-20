import { s } from '@sanity-typed/schema-builder'

export const staffPosition = s.document({
    name: 'StaffPosition',
    fields: [
        {
            name: 'name',
            type: s.string({
                validation: (rule) => rule.required(),
            })
        }
    ],
    preview: {
        select: {
            title: 'name'
        },
    },
})

export type StaffPosition = s.infer<typeof staffPosition>
