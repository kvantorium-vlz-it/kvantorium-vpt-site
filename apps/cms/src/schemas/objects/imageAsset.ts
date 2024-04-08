import { defineField, defineType } from "sanity";

export default defineType({
    name: 'imageAsset',
    type: 'object',
    title: 'Изображение',
    fields: [
        defineField({
            name: 'image',
            type: 'image',
            title: 'Файл изображения',
            options: {
                hotspot: true,
            },
            validation: (rule) => rule
                .required()
                .error('Поле обязательно для заполнения'),
        }),

        defineField({
            name: 'alt',
            type: 'string',
            title: 'Альтернативный текст',
            description: 'Поле, на случай, если изображение не появится у пользователей',
        }),

        defineField({
            name: 'caption',
            type: 'string',
            title: 'Подпись изображения',
        }),

        defineField({
            name: 'description',
            type: 'text',
            title: 'Описание изображения',
        }),
    ]
})
