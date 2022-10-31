import { requiredFieldValidation } from "../../assets/ts/utils";

export default {
    name: 'Group',
    type: 'document',
    title: 'Группы квантумов',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Название группы',
            validation: requiredFieldValidation,
        },
        {
            name: 'teacher',
            type: 'reference',
            to: [{ type: 'Staff' }],
            options: {
                filter: 'isTeacher',
            },
            title: 'Преподаватель квантума',
            validation: requiredFieldValidation,
        },
        {
            name: 'schedule',
            type: 'GroupSchedule',
            title: 'Расписание группы',
            validation: requiredFieldValidation,
        },
        {
            name: 'curriculum',
            type: 'reference',
            to: [{ type: 'Document' }],
            options: {
                filter: 'isCurriculum'
            },
            title: 'Программа квантума',
            validation: requiredFieldValidation,
        }
    ]
}
