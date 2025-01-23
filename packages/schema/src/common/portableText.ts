
import { DOCUMENT_TYPES } from "@kvantoriumvlz/shared/constants"
import { defineArrayMember, defineType } from "sanity"
import { linkAnnotation } from "./linkAnnotation"

const blockMember = defineArrayMember({
    type: 'block',
    styles: [
        { title: 'Обычный', value: 'normal' } as const,
        { title: 'Заголовок 1', value: 'h1' } as const,
        { title: 'Заголовок 2', value: 'h2' } as const,
        { title: 'Заголовок 3', value: 'h3' } as const,
        { title: 'Заголовок 4', value: 'h4' } as const,
        { title: 'Заголовок 5', value: 'h5' } as const,
        { title: 'Заголовок 6', value: 'h6' } as const,
    ],
    marks: {
        decorators: [
            { title: 'Жирный', value: 'strong' } as const,
            { title: 'Курсив', value: 'em' } as const,
            { title: 'Подчеркнутый', value: 'underline' } as const,
        ],
        annotations: [
            linkAnnotation,
        ],
    },
    lists: [],
})

const imageMember = defineArrayMember({
    type: 'image',
    title: 'Изображение',
    options: {
        hotspot: true,
    },
})

export const portableTextSchema = defineType({
    name: DOCUMENT_TYPES.PORTABLE_TEXT,
    type: 'array',
    of: [
        blockMember,
        imageMember,
    ],
})
