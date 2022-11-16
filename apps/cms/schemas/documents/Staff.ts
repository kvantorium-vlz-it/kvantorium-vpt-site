import { requiredRule } from '../../assets/ts/utils'

export default {
    name: 'Staff',
    type: 'document',
    title: 'Сотрудники',
    fields: [
        {
            name: 'firstName',
            type: 'string',
            title: 'Имя',
            validation: requiredRule,
        },
        {
            name: 'secondName',
            type: 'string',
            title: 'Фамилия',
            validation: requiredRule,
        },
        {
            name: 'middleName',
            type: 'string',
            title: 'Отчество',
        },
        {
            name: 'position',
            type: 'reference',
            to: [{ type: 'StaffPosition' }],
            title: 'Должность работника',
            validation: requiredRule,
        },
        {
            name: 'isTeacher',
            type: 'boolean',
            title: 'Является ли преподавателем одного из квантумов',
            initialValue: false,
            validation: requiredRule,
        },
        {
            name: 'kvantum',
            type: 'array',
            of: [{ type: 'reference', to: [{ type: 'Kvantum' }] }],
            title: 'Квантум(ы), в котом(ых) ведет занятия сотрудник',
            hidden: ({ document }) => !document.isTeacher,
            validation: Rule => Rule.custom((kvantums, context) => {
                if (!context.parent.isTeacher) {
                    return true
                }

                if (!kvantums || kvantums?.length === 0) {
                    return 'Должен быть указан хотя бы один квантум'
                }

                return true
            }),
        }
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
}
