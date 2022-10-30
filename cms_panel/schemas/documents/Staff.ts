import { requiredFieldValidation } from "../../assets/ts/utils"

export default {
    name: 'Staff',
    type: 'document',
    fields: [
        {
            name: 'firstName',
            type: 'string',
            validation: requiredFieldValidation,
        },
        {
            name: 'secondName',
            type: 'string',
            validation: requiredFieldValidation,
        },
        {
            name: 'middleName',
            type: 'string',
        },
        {
            name: 'position',
            type: 'reference',
            to: [{ type: 'StaffPosition' }],
            validation: requiredFieldValidation,
        },
        {
            name: 'image',
            type: 'image',
        },
        {
            name: 'isTeacher',
            type: 'boolean',
            validation: requiredFieldValidation,
        },
        {
            name: 'kvantum',
            type: 'array',
            of: [{ type: 'reference', to: [{ type: 'Kvantum' }] }],
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
