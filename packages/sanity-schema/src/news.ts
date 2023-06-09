import { s } from '@sanity-typed/schema-builder'

export const news = s.document({
    name: 'news',
    title: 'Новости',
    fields: [
        {
            name: 'heading',
            title: 'Заголовок',
            type: s.string(),
        },
        {
            name: 'date',
            title: 'Дата',
            type: s.datetime({
                initialValue: new Date().toISOString(),
            }),
        },
        {
            name: 'images',
            title: 'Изображения',
            type: s.array({
                of: [s.image()],
                initialValue: [],
            }),
        },
        {
            name: 'content',
            title: 'Контент новости',
            type: s.array({
                of: [s.block()],
            }),
        },
    ]
})

export type RawNews = s.infer<typeof news>
