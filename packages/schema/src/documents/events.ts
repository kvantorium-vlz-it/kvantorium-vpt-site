import { DOCUMENT_TYPES } from "@kvantoriumvlz/shared";
import { defineArrayMember, defineField, defineType } from "sanity";

const nameFieldSchema = defineField({
    name: 'name',
    title: 'Название мероприятия',
    type: 'string',
})

const slugFieldSchema = defineField({
    name: 'slug',
    title: 'Человекочитаемая ссылка',
    type: 'slug',
    options: {
        source: 'name'
    },
})

const previewImageSchema = defineField({
    name: 'previewImage',
    title: 'Превью',
    description: 'Главное изображение мероприятия',
    type: 'image'
})

const eventStepSchema = defineField({
    name: 'eventStep',
    title: 'Этап мероприятия',
    type: 'object',
    fields: [
        defineField({
            name: 'step',
            title: 'Название этапа',
            type: 'string',
        }),
        defineField({
            name: 'description',
            title: 'Описание этапа',
            type: DOCUMENT_TYPES.PORTABLE_TEXT,
        }),
        defineField({
            name: 'date',
            title: 'Дата проведения этапа',
            type: 'date',
        }),
        defineField({
            name: 'images',
            type: 'array',
            of: [defineArrayMember({ type: 'image' })]
        })
    ]
})

const eventStepsSchema = defineField({
    name: 'eventSteps',
    type: 'array',
    of: [defineArrayMember(eventStepSchema)]
})

export const eventsSchema = defineType({
    name: DOCUMENT_TYPES.EVENTS,
    title: 'мероприятия',
    type: 'document',
    fields: [
        nameFieldSchema,
        slugFieldSchema,
        previewImageSchema,
        eventStepsSchema,
    ]
})
