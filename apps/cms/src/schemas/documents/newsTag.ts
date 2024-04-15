import { defineType } from "sanity";
import { TagIcon } from '@sanity/icons'

export default defineType({
    name: 'newsTag',
    type: 'document',
    title: 'Новостные теги',
    icon: TagIcon,
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Название тега',
        },
    ],
})
