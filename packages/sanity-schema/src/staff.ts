import { s } from '@sanity-typed/schema-builder'
import { staffPosition } from './staffPosition'
import { kvantum } from './kvantum'

export const staff = s.document({
    name: 'Staff',
    fields: [
        {
            name: 'firstName',
            type: s.string({
                validation: (rule) => rule.required(),
            }),
        },
        {
            name: 'secondName',
            type: s.string({
                validation: (rule) => rule.required(),
            }),
        },
        {
            name: 'middleName',
            type: s.string(),
        },
        {
            name: 'position',
            type: s.reference({
                to: [staffPosition],
                validation: (rule) => rule.required(),
            }),
        },
        {
            name: 'isTeacher',
            type: s.boolean({
                initialValue: false,
            }),
        },
        {
            name: 'kvantum',
            type: s.array({
                of: [
                    s.reference({
                        to: [kvantum],
                    })
                ],
                hidden: ({ document }) => !document!.isTeacher,
                validation: (rule) => rule.custom((kvantums, context) => {
                    // if (!context.parent?.isTeacher!) {
                    //     return true
                    // }

                    if (!kvantums || kvantums?.length === 0) {
                        return 'Должен быть указан хотя бы один квантум'
                    }

                    return true
                }),
            }),
        },
    ],
    preview: {
        select: {
            firstName: 'firstName',
            secondName: 'secondName',
            middleName: 'middleName',
        },
        prepare: ({ firstName, secondName, middleName }) => {
            return {
                title: `${secondName} ${firstName} ${middleName || ''}`.trim()
            }
        }
    }
})

export type Staff = s.infer<typeof staff>
