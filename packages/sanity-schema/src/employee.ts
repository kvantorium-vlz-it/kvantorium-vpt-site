import { s } from '@sanity-typed/schema-builder'

export const employee = s.document({
    name: 'employee',
    title: 'Сотрудники',
    fields: [
        {
            name: 'lastName',
            title: 'Фамилия',
            type: s.string(),
        },
        {
            name: 'firstName',
            title: 'Имя',
            type: s.string(),
        },
        {
            name: 'patronymic',
            title: 'Отчество',
            type: s.string({}),
            optional: true,
        },
    ],
})

export type RawEmployee = s.infer<typeof employee>
