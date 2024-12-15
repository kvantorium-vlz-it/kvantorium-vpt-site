import { defineField, defineType } from "sanity";
import newsTag from "./newsTag";
import { DOCUMENT_TYPES, OBJECT_TYPES } from "../../constants";

export default defineType({
    name: DOCUMENT_TYPES.NEWS,
    title: 'Новости',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Заголовок',
            type: 'string',
            validation: (rule) => rule
                .required()
                .error("Поле не может быть пустым"),
        }),

        defineField({
            name: 'previewImage',
            title: 'Превью',
            description: 'Главное изображение новости',
            type: 'image',
            validation: (rule) => rule
                .assetRequired()
                .error("Поле не может быть пустым"),
        }),

        defineField({
            name: 'content',
            title: 'Контент',
            type: OBJECT_TYPES.PORTABLE_TEXT,
            validation: (rule) => rule
                .required()
                .error("Поле не может быть пустым"),
        }),

        defineField({
            name: 'slug',
            title: 'Человекочитаемая ссылка',
            type: 'slug',
            options: {
                source: 'title',
            },
            validation: (rule) => rule
                .required()
                .error("Поле не может быть пустым"),
        }),

        defineField({
            name: 'date',
            title: 'Дата публикации',
            type: 'date',
            options: {
                dateFormat: 'DD-MM-YYYY',
            },
            initialValue: () => new Date().toISOString().slice(0, 10),
        }),

        defineField({
            name: 'tags',
            title: 'Теги',
            type: 'array',
            of: [{
                type: 'reference',
                to: [
                    { type: DOCUMENT_TYPES.NEWS_TAG },
                ],
            }],
        }),

        defineField({
            name: 'gallery',
            title: 'Галерея',
            description: 'Изображения, которые относятся к новости, но не находятся в контенте',
            type: 'array',
            of: [{ type: 'image' }],
        }),
    ],
})
