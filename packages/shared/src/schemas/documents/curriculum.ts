import { CURRICULUM_LEVEL, DOCUMENT_TYPES } from "@constants"
import { getCurriculumLevelLabel } from "@utils"
import { defineField, defineType } from "sanity"
import { upperFirst } from "scule"

const nameFieldSchema = defineField({
    name: 'name',
    title: 'Название программы',
    type: 'string',
    validation: (rule) => rule
        .required()
        .error("Поле не может быть пустым"),
})

const kvantumFieldSchema = defineField({
    name: 'kvantum',
    title: 'Квантум',
    type: 'reference',
    to: [{ type: DOCUMENT_TYPES.KVANTUM }],
    validation: (rule) => rule
        .required()
        .error("Поле не может быть пустым"),
})

const teacherFieldSchema = defineField({
    name: 'teacher',
    title: 'Педагог',
    type: 'reference',
    to: [{ type: DOCUMENT_TYPES.EMPLOYEE }],
    options: {
        filter: 'isTeacher',
    },
    validation: (rule) => rule
        .required()
        .error("Поле не может быть пустым"),
})

const descriptionFieldSchema = defineField({
    name: 'description',
    title: 'Описание программы',
    type: DOCUMENT_TYPES.PORTABLE_TEXT,
    validation: (rule) => rule
        .required()
        .error("Поле не может быть пустым"),
})

const minimalAgeFieldSchema = defineField({
    name: 'minimalAge',
    title: 'Минимальный возраст',
    type: 'number',
    initialValue: () => 12,
    validation: (rule) => rule
        .required()
        .error("Поле не может быть пустым")
        .positive()
        .error('Значение не может быть отрицательным'),
})

const levelFieldSchema = defineField({
    name: 'level',
    title: 'Уровень учебной программы',
    type: 'number',
    options: {
        layout: 'radio',
        list: Object
            .entries(CURRICULUM_LEVEL)
            .map(([_, level]) => ({
                title: upperFirst(getCurriculumLevelLabel(level)),
                value: level,
            })),
    },
    initialValue: CURRICULUM_LEVEL.INTRODUCTORY,
    validation: (rule) => rule
        .required()
        .error("Поле не может быть пустым"),
})

const hoursPerYearFieldSchema = defineField({
    name: 'hoursPerYear',
    title: 'Длительность программы',
    type: 'object',
    fields: [
        defineField({
            name: 'firstHalf',
            title: 'Первое полугодие',
            type: 'number',
            initialValue: 72,
            validation: (rule) => rule
                .positive()
                .error('Значение не может быть отрицательным'),
        }),

        defineField({
            name: 'secondHalf',
            title: 'Второе полугодие',
            type: 'number',
            initialValue: 72,
            validation: (rule) => rule
                .positive()
                .error('Значение не может быть отрицательным'),
        }),
    ],
    validation: (rule) => rule
        .required()
        .error("Поле не может быть пустым"),
})

const scheduleFieldSchema = defineField({
    name: 'schedule',
    title: 'Расписание занятий',
    type: 'object',
    fields: [
        defineField({
            name: 'count',
            title: 'Количество дней в неделю',
            type: 'number',
            initialValue: 2,
            validation: (rule) => rule
                .positive()
                .error('Значение не может быть отрицательным'),
        }),

        defineField({
            name: 'hours',
            title: 'Длительность одного занятия (в академических часах)',
            type: 'number',
            initialValue: 2,
            validation: (rule) => rule
                .positive()
                .error('Значение не может быть отрицательным'),
        }),
    ],
    validation: (rule) => rule
        .required()
        .error("Поле не может быть пустым"),
})

const studentsInGroupFieldSchema = defineField({
    name: 'studentsInGroup',
    title: 'Количество учеников в одной группе',
    type: 'number',
    initialValue: 12,
    validation: (rule) => rule
        .positive()
        .error('Значение не может быть отрицательным'),
})

export const curriculumSchema = defineType({
    name: DOCUMENT_TYPES.CURRICULUM,
    title: 'Учебные программы',
    type: 'document',
    fields: [
        nameFieldSchema,
        kvantumFieldSchema,
        teacherFieldSchema,
        descriptionFieldSchema,
        minimalAgeFieldSchema,
        levelFieldSchema,
        hoursPerYearFieldSchema,
        scheduleFieldSchema,
        studentsInGroupFieldSchema,
    ],
})
