import { s } from '@sanity-typed/schema-builder'
import { employee } from './employee'

export const demoLesson = s.document({
    name: 'demoLesson',
    title: 'Демо-занятия',
    fields: [
        {
            name: 'name',
            title: 'Название демо-занятия',
            type: s.string(),
        },
        {
            name: 'fromAge',
            title: 'От какого возраста',
            type: s.number({
                initialValue: 8,
            }),
        },
        {
            name: 'toAge',
            title: 'До какого возраста',
            type: s.number({
                initialValue: 18,
            }),
        },
        {
            name: 'fromTime',
            title: 'Время начала занятия',
            type: s.datetime({
                initialValue: new Date().toISOString(),
            }),
        },
        {
            name: 'toTime',
            title: 'Время окончания занятия',
            type: s.datetime({
                initialValue: new Date().toISOString(),
            }),
        },
        {
            name: 'date',
            title: 'Дата проведения',
            type: s.date(),
        },
        {
            name: 'teacher',
            title: 'Педагог',
            type: s.reference({
                to: [employee],
            }),
        },
        {
            name: 'image',
            title: 'Изображение',
            type: s.image(),
        },
    ]
})

export type RawDemoLesson = s.infer<typeof demoLesson>
