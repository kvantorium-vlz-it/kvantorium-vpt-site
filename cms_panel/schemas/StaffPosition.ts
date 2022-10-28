import { FaCog } from 'react-icons/fa'

const POSITION_FLAGS = [
    {
        name: 'isTeacher',
        title: 'преподаватель',
        type: 'boolean',
        initialValue: false,
    },
]

export default {
    name: 'StaffPosition',
    title: 'Должности сотрудников',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Название должность',
            type: 'string',
        },
        {
            name: 'scopes',
            title: 'Возможности',
            type: 'object',
            description: 'Информация о том, что позволяет делать должность. Используется внутри сайта чтобы, например, отобразить только всех преподавателей кванториума.',
            fields: POSITION_FLAGS,
        },
    ],
    icon: FaCog,
}
