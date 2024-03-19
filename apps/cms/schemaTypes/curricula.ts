import { defineField, defineType } from "sanity";
import employee from "./employee";
import imageBlock from "./imageBlock";
import kvantum from "./kvantum";

export default defineType({
    name: 'curricula',
    type: 'document',
    fields: [
        defineField({
            name: 'kvantum',
            type: 'reference',
            to: [{ type: kvantum.name }]
        }),
        defineField({
            name: 'name',
            type: 'string',
        }),
        defineField({
            name: 'teacher',
            type: 'reference',
            to: [{ type: employee.name }],
            options: {
                filter: 'isTeacher',
            }
        }),
        defineField({
            name: 'ageFrom',
            type: 'number',
        }),
        defineField({
            name: 'ageTo',
            type: 'number',
        }),
        defineField({
            name: 'level',
            type: 'string',
            options: {
                list: [
                    'Вводный',
                    'Углубленный',
                    'Проектный',
                ],
            },
        }),
        defineField({
            name: 'interview',
            type: 'boolean',
        }),
        defineField({
            name: 'hoursPerYear',
            type: 'object',
            fields: [
                defineField({
                    name: 'firstHalf',
                    type: 'number',
                }),
                defineField({
                    name: 'secondHalf',
                    type: 'number',
                }),
            ],
        }),
        defineField({
            name: 'schedule',
            type: 'object',
            fields: [
                defineField({
                    name: 'count',
                    type: 'number',
                }),
                defineField({
                    name: 'hours',
                    type: 'number',
                }),
            ],
        }),
        defineField({
            name: 'studentsCount',
            type: 'number',
        }),
        defineField({
            name: 'description',
            type: 'array',
            of: [{ type: 'block' }, { type: imageBlock.name }]
        })
    ]
})
