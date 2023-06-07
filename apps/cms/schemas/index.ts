import { kvantum, news, curriculum, employee } from '@kvantorium-vpt-site/sanity-schema'

export const schemaTypes = [
    news.schema(),
    kvantum.schema(),
    curriculum.schema(),
    employee.schema(),
]
