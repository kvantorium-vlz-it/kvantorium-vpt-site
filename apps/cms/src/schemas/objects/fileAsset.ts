import { defineField, defineType } from "sanity";

export default defineType({
    name: 'fileAsset',
    type: 'object',
    title: 'Файл',
    fields: [
        defineType({
            name: 'file',
            type: 'file',
            title: 'Файл',
            validation: (rule) => rule
                .required()
                .error('Поле обязательно для заполнения'),
        }),

        defineType({
            name: 'name',
            type: 'string',
            title: 'Название файла',
        }),

        defineField({
            name: 'alt',
            type: 'string',
            title: 'Альтернативный текст',
            description: 'Поле, на случай, если файл не появится у пользователей',
        }),

        defineField({
            name: 'description',
            type: 'text',
            title: 'Описание файла',
        }),
    ],
})
