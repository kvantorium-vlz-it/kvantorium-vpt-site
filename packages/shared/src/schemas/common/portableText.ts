
import { DOCUMENT_TYPES } from "@constants"
import { defineArrayMember, defineType } from "sanity"

const blockMember = defineArrayMember({
    type: 'block',
    styles: [
        { title: 'Обычный', value: 'normal' },
        { title: 'Заголовок 1', value: 'h1' },
        { title: 'Заголовок 2', value: 'h2' },
        { title: 'Заголовок 3', value: 'h3' },
        { title: 'Заголовок 4', value: 'h4' },
        { title: 'Заголовок 5', value: 'h5' },
        { title: 'Заголовок 6', value: 'h6' },
    ],
    marks: {
        decorators: [
            { title: 'Жирный', value: 'strong' },
            { title: 'Курсив', value: 'em' },
            { title: 'Подчеркнутый', value: 'underline' },
        ],
        // annotations: [
        //     linkAnnotation,
        // ],
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
