import { requiredRule } from '../../assets/ts/utils'

export default {
    name: 'File',
    type: 'document',
    title: 'Документы/Файлы/Программы',
    fields: [
        {
            name: 'label',
            type: 'string',
            title: 'Подпись документа',
            validation: requiredRule,
        },
        {
            name: 'file',
            type: 'file',
            title: 'Файл',
            validation: requiredRule,
        },
        {
            name: 'isCurriculum',
            type: 'boolean',
            title: 'Является ли программой документа',
            initialValue: false,
        },
    ],
    preview: {
        select: {
            title: 'label',
        }
    }
}
