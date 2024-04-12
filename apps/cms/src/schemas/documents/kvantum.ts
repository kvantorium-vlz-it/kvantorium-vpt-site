import { defineField, defineType } from "sanity"
import { DocumentIcon } from '@sanity/icons'
import imageAsset from "../objects/imageAsset"
import contentBlocks from "../objects/contentBlock"

export default defineType({
    name: 'kvantum',
    type: 'document',
    title: 'Квантумы',
    icon: DocumentIcon,
    fields: [
        defineField({
            name: 'name',
            type: 'string',
            title: 'Название квантума',
            validation: (rule) => rule
                .required()
                .error("Поле обязательно для заполнения."),
        }),

        defineField({
            name: 'slug',
            type: 'slug',
            title: 'человекочитаемая ссылка',
            options: {
                source: 'name',
            },
            validation: (rule) => rule
                .required()
                .error("Поле обязательно для заполнения."),
        }),

        defineField({
            name: 'icon',
            type: imageAsset.name,
            title: 'Иконка квантума',
        }),

        defineField({
            name: 'description',
            type: contentBlocks.name,
            title: 'Описание квантума',
        }),

        defineField ({
            name: 'topics',
            type: 'array',
            title: 'Основные темы, рассматриваемые на направлении',
            of: [{ type: 'string' }],
        })
    ],

    preview: {
        select: {
            name: 'name',
            icon: 'icon.image',
        },
        prepare({ icon, name }) {
            return {
                media: icon,
                title: name,
            }
        },
    }
})
