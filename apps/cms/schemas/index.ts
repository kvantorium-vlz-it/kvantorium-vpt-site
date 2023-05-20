import { kvantum, news, staffPosition } from '@kvantorium-vpt-site/sanity-schema'

export const schemaTypes = [
    staffPosition.schema(),
    news.schema(),
    kvantum.schema(),
]
