import { s } from '@sanity-typed/schema-builder'

export const kvantum = s.document({
    name: 'Kvantum',
    fields: [
        {
            name: 'name',
            type: s.string({
                validation: (rule) => rule.required(),
            }),
        },
        {
            name: 'description',
            type: s.array({
                of: [s.block()],
                validation: (rule) => rule.required(),
            }),
        },
        {
            name: 'shortDescription',
            type: s.text({
                max: 200,
                validation: (rule) => rule.required(),
            }),
        },
        {
            name: 'icon',
            type: s.image({
                validation: (rule) => rule.required(),
            }),
        },
        {
            name: 'image',
            type: s.image(),
        },
    ],
    preview: {
        select: {
            title: 'name',
            media: 'icon',
        },
    },
})

export type Kvantum = s.infer<typeof kvantum>
