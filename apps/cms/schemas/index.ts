import { kvantum, news, staffPosition, file } from '@kvantorium-vpt-site/sanity-schema'

export const schemaTypes = [
    staffPosition.schema(),
    news.schema(),
    kvantum.schema(),
    file.schema(),
]
