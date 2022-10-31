import { requiredFieldValidation } from "../../assets/ts/utils";

export default {
    name: 'Document',
    type: 'document',
    title: 'Документы',
    description: 'Различные документы, опубликованные на сайте',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Название документа',
            validation: requiredFieldValidation,
        },
        {
            name: 'file',
            type: 'file',
            title: 'Файл документа',
            description: 'То, что пользователи могут скачать с сайта',
            validation: requiredFieldValidation,
        },
        {
            name: 'isCurriculum',
            type: 'boolean',
            title: 'Программа квантума',
            description: 'Является ли документ программой какого-либо из квантумов',
            validation: requiredFieldValidation,
        }
    ]
}
