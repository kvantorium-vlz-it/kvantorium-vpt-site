import TimeToSecondsField from 'sanity-plugin-time-seconds'
import { requiredFieldValidation } from '../../assets/ts/utils'

const DAYS_OF_WEEK = [
    'воскресенье',
    'понедельник',
    'вторник',
    'среда',
    'четверг',
    'пятница',
    'суббота',
]

export default {
    name: 'LessonSchedule',
    type: 'object',
    title: 'Занятие группы',
    fields: [
        {
            name: 'dayOfWeek',
            type: 'number',
            title: 'День недели проведения занятия',
            options: {
                list: DAYS_OF_WEEK.map((day, index) => ({
                    title: day,
                    value: index,
                }))
            },
            validation: requiredFieldValidation,
        },
        {
            name: 'startTime',
            type: 'number',
            title: 'Время начала занятия',
            inputComponent: TimeToSecondsField,
            validation: requiredFieldValidation,
        },
    ],
    preview: {
        select: {
            dayOfWeek: 'dayOfWeek',
            startTime: 'startTime'
        },
        prepare: ({ dayOfWeek, startTime }) => {
            const hours = Math.floor(startTime / 60)
            const minutes = startTime % 60
            return { title: `${DAYS_OF_WEEK.at(dayOfWeek)} ${hours}:${minutes}` }
        }
    }
}
