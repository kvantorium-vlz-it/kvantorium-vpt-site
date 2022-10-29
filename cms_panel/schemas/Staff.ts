import { FaRegUser } from 'react-icons/fa'
import sanityClient from '@sanity/client'
import Config from '../sanity.json'

import StaffPosition from './StaffPosition'
import { Flags } from '../assets/ts/PositionFlags'

const FIRST_NAME_REQUIRED_ERROR_MESSAGE = 'Имя обязательно к заполнению'
const SECOND_NAME_REQUIRED_ERROR_MESSAGE = 'Фамилия обязательно к заполнению'
const ZERO_KVANTUMS_LENGTH_ERROR_MESSAGE = 'У преподавателя должен быть указан хотя бы один квантум, в котором он ведет занятия'
const NON_UNIQUE_KVANTUMS_ERROR_MESSAGE = 'Квантумы должны быть уникальными'

const client = sanityClient(Config.api)

const updateTeacherPositions = async () => {
    const query = `*[_type == "${StaffPosition.name}" && scopes.${'isTeacher' as Flags}]`
    const positions = await client.fetch(query)

    teacherPositions = positions
}

let teacherPositions = []

// Updating array is hardcoded. It's calls on validation and checking is hidden field
// TODO fix not synced array
updateTeacherPositions()

export default {
    name: 'Staff',
    title: 'Сотрудники',
    type: 'document',
    fields: [
        {
            name: 'firstName',
            title: 'Имя',
            type: 'string',
            description: 'Имя сотрудника',
            validation: Rule => Rule
                .required('Имя обязательно для заполнения')
                .error(FIRST_NAME_REQUIRED_ERROR_MESSAGE),
        },
        {
            name: 'secondName',
            title: 'Фамилия',
            type: 'string',
            description: 'Фамилия сотрудника',
            validation: Rule => Rule
                .required()
                .error(SECOND_NAME_REQUIRED_ERROR_MESSAGE),
        },
        {
            name: 'middleName',
            title: 'Отчество',
            type: 'string',
            description: 'Отчество сотрудника',
        },
        {
            name: 'position',
            title: 'Должность',
            type: 'reference',
            to: [{ type: StaffPosition.name }],
            description: 'Должность сотрудника',
            validation: Rule => [
                Rule
                    .required()
                    .error('Должность обязательна к заполнению'),
                Rule.custom(async () => {
                    await updateTeacherPositions()

                    return true
                })
            ]
        },
        {
            name: 'kvantum',
            title: 'Квантум(ы)',
            type: 'array',
            of: [
                {
                    type: 'reference',
                    to: [{ type: 'Kvantum' }]
                }
            ],
            description: 'Квантум(ы), в которых преподаватель ведет занятия',
            hidden: ({ document }) => {
                updateTeacherPositions()

                const positionsIds = teacherPositions.map(position => position['_id'])

                if (!document.position) {
                    return true
                }

                const isHidden = !positionsIds.includes(document.position['_ref'])

                return isHidden
            },
            validation: (Rule) => {
                updateTeacherPositions()

                return [
                    Rule.min(1)
                        .error(ZERO_KVANTUMS_LENGTH_ERROR_MESSAGE),
                    Rule.unique()
                        .error(NON_UNIQUE_KVANTUMS_ERROR_MESSAGE),
                    Rule.custom(async () => {
                        await updateTeacherPositions()
                        return true
                    })
                ]
            }
        },
        {
            name: 'image',
            title: 'Фотография',
            type: 'image',
            description: 'Фотография сотрудника',
        },
    ],
    icon: FaRegUser,
    preview: {
        select: {
            title: 'secondName',
            subtitle: 'firstName',
            media: 'image',
        }
    }
}
