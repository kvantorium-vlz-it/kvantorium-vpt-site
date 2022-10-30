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
    fields: [
        {
            name: 'dayOfWeek',
            type: 'number',
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
            inputComponent: TimeToSecondsField,
            validation: requiredFieldValidation,
        },
    ]
}
