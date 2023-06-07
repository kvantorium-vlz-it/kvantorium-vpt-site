import { kvantum, news, staffPosition, file, staff, curriculum, employee, demoLesson } from '@kvantorium-vpt-site/sanity-schema'

export const schemaTypes = [
    staffPosition.schema(),
    news.schema(),
    kvantum.schema(),
    file.schema(),
    staff.schema(),
    curriculum.schema(),
    employee.schema(),
    demoLesson.schema(),
]
