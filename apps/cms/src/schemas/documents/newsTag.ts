import { defineType } from "sanity";
import { TagsIcon } from '@sanity/icons'

export default defineType({
    name: 'newsTag',
    type: 'document',
    title: 'Новостные теги',
    icon: TagsIcon,
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Название тега',
        },
    ],
})
