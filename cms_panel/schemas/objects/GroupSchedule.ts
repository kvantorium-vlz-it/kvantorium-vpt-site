export default {
    name: 'GroupSchedule',
    type: 'array',
    of: [{ type: 'LessonSchedule' }],
    options: {
        sortable: false,
    },
    validation: Rule =>
        Rule
            .min(1)
            .error('В расписании дожно быть хотя бы одно занятие')
}
