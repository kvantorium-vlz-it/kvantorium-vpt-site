import { s } from '@sanity-typed/schema-builder'

export const kvantum = s.document({
    name: 'kvantum',
    title: 'Квантумы',
    fields: [
        {
            name: 'name',
            title: 'Название квантума',
            type: s.string(),
        },
        {
            name: 'icon',
            title: 'Иконка квантума',
            type: s.image(),
        },
        {
            name: 'isAdditional',
            title: 'Дополнительный квантум',
            type: s.boolean({
                initialValue: false,
            }),
        },
        {
            name: 'description',
            title: 'Описание квантума',
            type: s.array({
                of: [s.block()],
            }),
        },
    ]
})

export type Kvantum = s.infer<typeof kvantum>
