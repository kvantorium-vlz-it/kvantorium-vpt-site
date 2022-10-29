import { FaCog } from 'react-icons/fa'

import { STAFF_POSITION_SCOPE_FLAGS } from '../assets/ts/PositionFlags'

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
            fields: STAFF_POSITION_SCOPE_FLAGS,
        },
    ],
    icon: FaCog,
}

interface IFlag {
    title: string;
    description?: string;
    initialValue?: boolean;
}

interface IFlags {
    [key: string]: IFlag;
}
