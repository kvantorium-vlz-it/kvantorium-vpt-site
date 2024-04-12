import { defineField, defineType } from "sanity"
import { UsersIcon } from '@sanity/icons'

export default defineType({
    name: 'employee',
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
                .error("Поле обязательно для заполнения."),
        }),

        defineField({
            name: 'surname',
            type: 'string',
            title: 'Фамилия',
            validation: (rule) => rule
                .required()
                .error("Поле обязательно для заполнения."),
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
            validation: (rule) => rule
                .required()
                .error("Поле обязательно для заполнения."),
        }),

        defineField({
            name: 'isTeacher',
            type: 'boolean',
            title: 'Является ли педагогом',
            validation: (rule) => rule
                .required()
                .error("Поле обязательно для заполнения."),
            initialValue: true,
        }),

        defineField({
            name: 'image',
            type: 'imageAsset',
            title: 'Изображение сотрудника',
            validation: (rule) => rule
                .required()
                .error("Поле обязательно для заполнения."),
        }),
    ],

    preview: {
        select: {
            name: 'name',
            surname: 'surname',
            patronymic: 'patronymic',
            image: 'image',
            description: 'description',
            isTeacher: 'isTeacher',
        },

        prepare(selection) {
            const {
                name,
                surname,
                patronymic,
                image,
                description,
                isTeacher,
            } = selection

            return {
              title: `${surname} ${name} ${patronymic}`,
              media: image.image,
              description: description,
              subtitle: isTeacher && 'Педагог' || undefined,
            }
        },
    }
})
