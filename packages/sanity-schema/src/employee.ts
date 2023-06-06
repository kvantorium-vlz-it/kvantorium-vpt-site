import { s } from '@sanity-typed/schema-builder'

export const employee = s.document({
    name: 'employee',
    title: 'Сотрудники',
    fields: [
        {
            name: 'firstName',
            title: 'Имя',
            type: s.string(),
        },
        {
            name: 'secondName',
            title: 'Фамилия',
            type: s.string(),
        },
        {
            name: 'middleName',
            title: 'Отчество',
            type: s.string({}),
            optional: true,
        },
    ],
})

export type RawEmployee = s.infer<typeof employee>
