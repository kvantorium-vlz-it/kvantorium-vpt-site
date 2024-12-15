import { defineField, defineType } from "sanity"
import { UsersIcon } from '@sanity/icons'
import { DOCUMENT_TYPES } from "../../constants"

export default defineType({
    name: DOCUMENT_TYPES.EMPLOYEE,
    title: 'Сотрудники',
    type: 'document',
    icon: UsersIcon,
    fields: [
        defineField({
            name: 'name',
            title: 'Имя',
            type: 'string',
            validation: (rule) => rule
                .required()
                .error("Поле не может быть пустым"),
        }),

        defineField({
            name: 'surname',
            title: 'Фамилия',
            type: 'string',
            validation: (rule) => rule
                .required()
                .error("Поле не может быть пустым"),
        }),

        defineField({
            name: 'patronymic',
            title: 'Отчество',
            type: 'string',
        }),

        defineField({
            name: 'description',
            title: 'О сотруднике',
            type: 'text',
        }),

        defineField({
            name: 'isTeacher',
            title: 'Является ли педагогом',
            type: 'boolean',
            initialValue: true,
            validation: (rule) => rule
                .required()
                .error("Поле не может быть пустым"),
        }),

        defineField({
            name: 'image',
            title: 'Изображение сотрудника',
            type: 'image',
            validation: (rule) => rule
                .assetRequired()
                .error("Поле не может быть пустым"),
        }),
    ],
})
