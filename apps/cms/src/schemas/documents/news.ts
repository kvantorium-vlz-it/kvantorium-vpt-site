import { defineField, defineType } from "sanity";
import newsTag from "./newsTag";

export default defineType({
    name: 'news',
    type: 'document',
    title: 'Новости',
    fields: [
        defineField({
            name: 'title',
            type: 'string',
            title: 'Заголовок',
            validation: (rule) => rule
                .required()
                .error("Поле обязательно для заполнения."),
        }),

        defineField({
            name: 'previewImage',
            type: 'imageAsset',
            title: 'Превью',
            description: 'Изображение для предварительного просмотра новости.',
            validation: (rule) => rule
                .required()
                .error("Поле обязательно для заполнения."),
        }),

        defineField({
            name: 'content',
            type: 'contentBlock',
            title: 'Контент',
            validation: (rule) => rule
                .required()
                .error("Поле обязательно для заполнения."),
        }),

        defineField({
            name: 'slug',
            type: 'slug',
            title: 'человекочитаемая ссылка',
            options: {
                source: 'title',
            },
            validation: (rule) => rule
                .required()
                .error("Поле обязательно для заполнения."),
        }),

        defineField({
            name: 'date',
            type: 'date',
            title: 'Дата публикации',
            options: {
                dateFormat: 'DD-MM-YYYY',
            },
            initialValue: () => new Date().toISOString().slice(0, 10),
        }),

        defineField({
            name: 'tags',
            type: 'array',
            title: 'Теги',
            of: [{
                type: 'reference',
                to: [{
                    type: newsTag.name,
                }],
            }],
        }),

        defineField({
            name: 'gallery',
            type: 'array',
            title: 'Галерея',
            of: [{ type: 'imageAsset' }],
            description: 'Изображения, которые относятся к новости, но не находятся в контенте',
        }),
    ],

    preview: {
        select: {
            title: 'title',
            previewImage: 'previewImage.image',
            date: 'date',
        },

        prepare({ date, previewImage, title }) {
            return {
                media: previewImage,
                title: `${title} ${date}`,
            }
        },
    }
})
