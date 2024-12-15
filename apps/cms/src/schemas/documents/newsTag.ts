import { defineType } from "sanity"
import { TagIcon } from '@sanity/icons'
import { DOCUMENT_TYPES } from "../../constants"

export default defineType({
    name: DOCUMENT_TYPES.NEWS_TAG,
    title: 'Новостные теги',
    type: 'document',
    icon: TagIcon,
    fields: [
        {
            name: 'name',
            title: 'Тег',
            type: 'string',
        },
    ],
})
