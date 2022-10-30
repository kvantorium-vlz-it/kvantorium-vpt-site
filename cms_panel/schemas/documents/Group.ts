import { requiredFieldValidation } from "../../assets/ts/utils";

export default {
    name: 'Group',
    type: 'document',
    fields: [
        {
            name: 'name',
            type: 'string',
            validation: requiredFieldValidation,
        },
        {
            name: 'teacher',
            type: 'reference',
            to: [{ type: 'Staff' }],
            options: {
                filter: 'isTeacher',
            },
            validation: requiredFieldValidation,
        },
        {
            name: 'schedule',
            type: 'GroupSchedule',
            validation: requiredFieldValidation,
        },
        {
            name: 'curriculum',
            type: 'reference',
            to: [{ type: 'Document' }],
            validation: requiredFieldValidation,
        }
    ]
}
