import { defineField, defineType } from "sanity"
import { DOCUMENT_TYPES, OBJECT_TYPES } from "../../constants"

export default defineType({
    name: OBJECT_TYPES.PORTABLE_TEXT,
    type: 'array',
    of: [
        {
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
            },
            lists: [],
        },
        {
            type: 'image',
            title: 'Изображение',
        },
    ],
})
