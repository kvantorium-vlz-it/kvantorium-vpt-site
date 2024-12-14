import { defineField, defineType } from "sanity"
import { UsersIcon } from '@sanity/icons'
import { DOCUMENT_TYPES } from "../../constants"

export default defineType({
    name: DOCUMENT_TYPES.EMPLOYEE,
    type: 'document',
    title: 'Сотрудники',
    icon: UsersIcon,
    fields: [
        defineField({
            name: 'name',
            type: 'string',
            title: 'Имя',
            validation: (rule) => rule
                .required()
                .error("Поле не может быть пустым"),
        }),

        defineField({
            name: 'surname',
            type: 'string',
            title: 'Фамилия',
            validation: (rule) => rule
                .required()
                .error("Поле не может быть пустым"),
        }),

        defineField({
            name: 'patronymic',
            type: 'string',
            title: 'Отчество',
        }),

        defineField({
            name: 'description',
            type: 'text',
            title: 'О сотруднике',
        }),

        defineField({
            name: 'isTeacher',
            type: 'boolean',
            title: 'Является ли педагогом',
            initialValue: true,
        }),

        defineField({
            name: 'image',
            type: 'image',
            title: 'Изображение сотрудника',
            validation: (rule) => rule
                .assetRequired()
                .error("Поле не может быть пустым"),
        }),
    ],
})
