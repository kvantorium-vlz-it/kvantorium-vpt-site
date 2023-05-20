import { s } from '@sanity-typed/schema-builder'

export const news = s.document({
    name: 'News',
    fields: [
        {
            name: 'name',
            type: s.string({
                validation: (rule) => rule.required(),
            }),
        },
        {
            name: 'content',
            type: s.array({
                of: [
                    s.block(),
                    s.image()
                ],
                validation: (rule) => rule.required(),
            }),
        },
        {
            name: 'shortContent',
            type: s.text({
                max: 200,
                validation: (rule) => rule.required(),
            }),
        },
        {
            name: 'image',
            type: s.image()
        },
        {
            name: 'date',
            type: s.date(),
        },
    ]
})

export type News = s.infer<typeof news>
