import { DOCUMENT_TYPES } from "@kvantoriumvlz/shared/constants"
import { defineField, defineType } from "sanity"

const nameFieldSchema = defineField({
    name: 'name',
    title: 'Имя',
    type: 'string',
    validation: (rule) => rule
        .required()
        .error("Поле не может быть пустым"),
})

const surnameFieldSchema = defineField({
    name: 'surname',
    title: 'Фамилия',
    type: 'string',
    validation: (rule) => rule
        .required()
        .error("Поле не может быть пустым"),
})

const patronymicFieldSchema = defineField({
    name: 'patronymic',
    title: 'Отчество',
    type: 'string',
})

const descriptionFieldSchema = defineField({
    name: 'description',
    title: 'О сотруднике',
    type: 'text',
    initialValue: '',
    validation: (rule) => rule
        .required()
        .error("Поле не может быть пустым"),
})

const isTeacherFieldSchema = defineField({
    name: 'isTeacher',
    title: 'Является ли педагогом',
    type: 'boolean',
    initialValue: true,
    validation: (rule) => rule
        .required()
        .error("Поле не может быть пустым"),
})

const imageFieldSchema = defineField({
    name: 'image',
    title: 'Изображение сотрудника',
    type: 'image',
    validation: (rule) => rule
        .assetRequired()
        .required()
        .error("Поле не может быть пустым"),
})

export const employeeSchema = defineType({
    name: DOCUMENT_TYPES.EMPLOYEE,
    title: 'Сотрудники',
    type: 'document',
    fields: [
        nameFieldSchema,
        surnameFieldSchema,
        patronymicFieldSchema,
        descriptionFieldSchema,
        isTeacherFieldSchema,
        imageFieldSchema,
    ],
})
