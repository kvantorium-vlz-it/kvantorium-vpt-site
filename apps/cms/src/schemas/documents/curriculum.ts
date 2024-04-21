import { defineField, defineType, useClient } from "sanity";
import kvantum from "./kvantum";
import employee from "./employee";
import contentBlock from "../objects/contentBlock";

import { DefaultCurriculumConstants } from 'shared/constants'
import { CURRICULUM_LEVEL } from 'shared/enums'
import { capitalizeFirstLetter, getCurriculumLevelLabel } from 'shared/utils'

export default defineType({
    name: 'curriculum',
    type: 'document',
    title: 'Учебные программы',
    fields: [
        defineField({
            name: 'kvantum',
            type: 'reference',
            title: 'Квантум',
            to: [{ type: kvantum.name }],
            validation: (rule) => rule
                .required()
                .error("Поле обязательно для заполнения."),
        }),

        defineField({
            name: 'name',
            type: 'string',
            title: 'Название программы',
            validation: (rule) => rule
                .required()
                .error("Поле обязательно для заполнения."),
        }),

        defineField({
            name: 'teacher',
            type: 'reference',
            title: 'Педагог',
            to: [{ type: employee.name }],
            options: {
                filter: 'isTeacher',
            },
            validation: (rule) => rule
                .required()
                .error("Поле обязательно для заполнения."),
        }),

        defineField({
            name: 'age',
            type: 'object',
            title: 'Возраст обучающихся',
            fields: [
                defineField({
                    name: 'from',
                    type: 'number',
                    title: 'Минимальный возраст',
                    initialValue: DefaultCurriculumConstants.STUDENTS_MIN_AGE,
                }),

                defineField({
                    name: 'to',
                    type: 'number',
                    title: 'Максимальный возраст',
                    initialValue: DefaultCurriculumConstants.STUDENTS_MAX_AGE,
                    validation: (rule) => rule
                        .max(DefaultCurriculumConstants.STUDENTS_MAX_AGE)
                        .error(`Возраст должен быть до ${DefaultCurriculumConstants.STUDENTS_MAX_AGE}`),
                }),
            ],
            validation: (rule) => rule
                .required()
                .error("Поле обязательно для заполнения."),
        }),

        defineField({
            name: 'level',
            type: 'number',
            title: 'уровень учебной программы',
            options: {
                list: Object
                    .entries(CURRICULUM_LEVEL)
                    .map(([_, level]) => ({
                        title: capitalizeFirstLetter(getCurriculumLevelLabel(level)),
                        value: level,
                    }))
            },
            initialValue: CURRICULUM_LEVEL.INTRODUCTORY,
        }),

        defineField({
            name: 'isInterview',
            type: 'boolean',
            title: 'Обучение по собеседованию',
            initialValue: false,
        }),

        defineField({
            name: 'hoursPerYear',
            type: 'object',
            title: 'Длительность программы',
            fields: [
                defineField({
                    name: 'firstHalf',
                    title: 'Первое полугодие',
                    type: 'number',
                    initialValue: DefaultCurriculumConstants.ACADEMIC_HOURS_PER_HALF_YEAR,
                }),

                defineField({
                    name: 'secondHalf',
                    title: 'Второе полугодие',
                    type: 'number',
                    initialValue: DefaultCurriculumConstants.ACADEMIC_HOURS_PER_HALF_YEAR
                }),
            ],
            validation: (rule) => rule
                .required()
                .error("Поле обязательно для заполнения."),
        }),

        defineField({
            name: 'schedule',
            type: 'object',
            title: 'Расписание занятий',
            fields: [
                defineField({
                    name: 'count',
                    type: 'number',
                    title: 'Количество дней в неделю',
                    initialValue: DefaultCurriculumConstants.SCHEDULE_DAYS_PER_WEEK,
                }),

                defineField({
                    name: 'hours',
                    type: 'number',
                    title: 'Длительность одного занятия (в академических часах)',
                    initialValue: DefaultCurriculumConstants.SCHEDULE_LESSON_DURATION_IN_ACADEMIC_HOURS,
                }),
            ],
            validation: (rule) => rule
                .required()
                .error("Поле обязательно для заполнения."),
        }),

        defineField({
            name: 'studentsInGroup',
            type: 'number',
            title: 'Количество учеников в одной группе',
            initialValue: DefaultCurriculumConstants.STUDENTS_COUNT_IN_GROUP,
        }),

        defineField({
            name: 'description',
            title: 'Описание программы',
            type: contentBlock.name,
            validation: (rule) => rule
                .required()
                .error("Поле обязательно для заполнения."),
        }),
    ],

    preview: {
        select: {
            name: 'name',
            kvantumName: 'kvantum.name',
            kvantumImage: 'kvantum.icon.image',
            level: 'level',
            teacherName: 'teacher.name',
            teacherSurname: 'teacher.surname',
            teacherPatronymic: 'teacher.patronymic',
        },
        prepare({
            kvantumImage,
            name,
            level,
            teacherName,
            teacherSurname,
            teacherPatronymic,
        }) {
            const levelLabel = capitalizeFirstLetter(getCurriculumLevelLabel(level))
            const teacherLabel = `${teacherSurname} ${teacherName} ${teacherPatronymic}`

            return {
                title: `${name} (${levelLabel} уровень)`,
                media: kvantumImage,
                subtitle: `${teacherLabel}`
            }
        },
    }
})
