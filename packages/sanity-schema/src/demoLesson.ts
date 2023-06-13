import { s } from '@sanity-typed/schema-builder'
import { employee } from './employee'
import { kvantum } from './kvantum'

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
            name: 'duration',
            title: 'Продолжительность занятия',
            type: s.number({
                initialValue: 1.5,
            }),
        },
        {
            name: 'teacher',
            title: 'Педагог',
            type: s.reference({
                to: [employee],
            }),
        },
        {
            name: 'kvantum',
            title: 'Квантум',
            type: s.reference({
                to: [kvantum],
            }),
        },
    ]
})

export type RawDemoLesson = s.infer<typeof demoLesson>
