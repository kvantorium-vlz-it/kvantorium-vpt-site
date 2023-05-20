import { kvantum, news, staffPosition, file, staff } from '@kvantorium-vpt-site/sanity-schema'

export const schemaTypes = [
    staffPosition.schema(),
    news.schema(),
    kvantum.schema(),
    file.schema(),
    staff.schema(),
]
