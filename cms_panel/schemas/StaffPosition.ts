import { FaCog } from 'react-icons/fa'

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
    ],
    icon: FaCog,
}
