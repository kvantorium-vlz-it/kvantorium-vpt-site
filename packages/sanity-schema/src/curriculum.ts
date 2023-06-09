import { s } from '@sanity-typed/schema-builder'
import { kvantum } from './kvantum'
import { employee } from './employee'

export const curriculum = s.document({
    name: 'curriculum',
    title: 'Учебные программы',
    fields: [
        {
            name: 'name',
            title: 'Название программы',
            type: s.string(),
        },
        {
            name: 'fromAge',
            title: 'Со сколько лет',
            type: s.number({
                initialValue: 6,
            }),
        },
        {
            name: 'toAge',
            title: 'До скольки лет',
            type: s.number({
                initialValue: 18,
            }),
        },
        {
            name: 'file',
            title: 'Файл программы',
            type: s.file(),
        },
        {
            name: 'description',
            title: 'Описание программы',
            type: s.array({
                of: [s.block()],
            }),
        },
        {
            name: 'kvantum',
            title: 'К какому квантуму относится программа',
            type: s.reference({
                to: [kvantum],
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
            name: 'projectExamples',
            title: 'Примеры проектов, которые создаются в рамках программы',
            type: s.array({
                of: [s.string()],
                initialValue: [],
            }),
        },
    ],
})

export type RawCurriculum = s.infer<typeof curriculum>
