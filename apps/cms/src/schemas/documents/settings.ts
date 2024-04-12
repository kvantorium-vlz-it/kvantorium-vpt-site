import { defineArrayMember, defineField, defineType } from "sanity";
import contentBlock from "../objects/contentBlock";
import imageAsset from "../objects/imageAsset";
import fileAsset from "../objects/fileAsset";

export default defineType({
    name: 'settings',
    type: 'document',
    title: 'Настройки',
    fields: [
        // Index page
        defineField({
            type: 'array',
            name: 'faq',
            title: 'Часто задаваемые вопросы',
            of: [defineArrayMember({
                    type: 'object',
                    fields: [
                        defineField({
                            name: 'question',
                            type: 'string',
                            title: 'Вопрос',
                        }),
                        defineField({
                            name: 'answer',
                            type: 'string',
                            title: 'Ответ',
                        })
                    ]
                }),
            ],
        }),

        // About page
        defineField({
            name: 'about',
            type: contentBlock.name,
            title: 'О нас',
        }),

        // Media page
        defineField({
            name: 'mediaGallery',
            type: 'array',
            title: 'Галерея',
            of: [{ type: imageAsset.name }],
        }),

        // Documents page
        defineField({
            name: 'papers',
            type: 'array',
            title: 'Документы',
            of: [{ type: fileAsset.name }],
        })
    ]
})
