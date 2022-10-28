const kvantum = {
    name: 'Kvantums',
    type: 'document',
    title: 'Квантумы',
    fields: [
        {
            name: 'name',
            type: 'string',
            description: 'Название квантума. Будет отображаться на странице квантума и карточке квантума.',
            optional: false,
            title: 'Название',
        },
        {
            name: 'description',
            type: 'text',
            description: 'Описание квантума. Будет отображаться только на странице квантума.',
            optional: false,
            title: 'Описание квантума',
        },
        {
            name: 'shortDescription',
            type: 'string',
            description: 'Краткое описание квантума. Будет отображаться на карточке квантума. Не более 300 символов',
            optional: false,
            title: 'Краткое описание квантума',
            validation: (rule) => rule.max(300).warning("Описание не может быть больше 300 символов.")
        },
        {
            name: 'icon',
            type: 'image',
            title: 'Иконка квантума',
            description: 'Иконка квантума, отображаемая на его карточке',
        },
    ]
}

export default kvantum
