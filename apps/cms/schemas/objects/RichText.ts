export default {
    name: 'RichText',
    type: 'array',
    of: [
        {
            type: 'block'
        },
        {
            type: 'image',
            title: 'Изображение',
            fields: [
                {
                    type: 'text',
                    name: 'alt',
                    title: 'Альтернативный текст',
                    description: 'Альтернативый текст, если изображение не загрузится',
                    options: {
                        isHighlighted: true
                    },
                },
            ],
        },
    ],
}
