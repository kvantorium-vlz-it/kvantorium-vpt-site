import { requiredFieldValidation } from "../../assets/ts/utils";

export default {
    name: 'Contact',
    type: 'document',
    title: 'Контакты',
    description: 'Различные контакты, используемые на сайте',
    fields: [
        {
            name: 'type',
            type: 'string',
            title: 'Тип контакта',
            description: 'Используется для преобразования значения контакта в ссылку, если она поддерживается',
            options: {
                list: [
                    { value: 'link', title: 'ссылка' },
                    { value: 'email', title: 'почта' },
                    { value: 'tel', title: 'телефон' },
                ]
            },
            validation: requiredFieldValidation,
        },
        {
            name: 'value',
            type: 'string',
            title: 'Значение контакта',
            description: 'Значение контакта',
            validation: requiredFieldValidation,
        },
        {
            name: 'name',
            type: 'string',
            title: 'Описание, что это за контакт',
            validation: requiredFieldValidation,
        },
        {
            name: 'label',
            type: 'string',
            title: 'Надпись контакта',
            description: 'То, чем будет заменено значение. Может использоваться, чтобы отобразить текст при наведении',
            validation: requiredFieldValidation,
        },
    ],
    preview: {
        select: {
            title: 'label',
        }
    }
}
