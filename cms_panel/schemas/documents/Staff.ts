import { requiredFieldValidation } from "../../assets/ts/utils"

export default {
    name: 'Staff',
    type: 'document',
    title: 'Сотрудники',
    fields: [
        {
            name: 'firstName',
            type: 'string',
            title: 'Имя',
            validation: requiredFieldValidation,
        },
        {
            name: 'secondName',
            type: 'string',
            title: 'Фамилия',
            validation: requiredFieldValidation,
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
            title: 'Должность',
            description: 'Используется, чтобы отобразить сотрудников на специальной странице по должностям',
            validation: requiredFieldValidation,
        },
        {
            name: 'isTeacher',
            type: 'boolean',
            title: 'Преподает ли сотрудник в каком-нибудь квантуме',
            validation: requiredFieldValidation,
        },
        {
            name: 'kvantum',
            type: 'array',
            of: [{ type: 'reference', to: [{ type: 'Kvantum' }] }],
            title: 'Квантум(ы), в котором(ых) сотрудник ведет занятия',
            hidden: ({ document }) => !document.isTeacher,
            validation: Rule => Rule.custom((kvantums, context) => {
                if (!context.parent.isTeacher) {
                    return true
                }

                if (!kvantums || kvantums?.length === 0) {
                    return 'Должен быть указан хотя бы один квантум'
                }

                return true
            })
        }
    ]
}
