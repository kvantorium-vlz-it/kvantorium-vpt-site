export default {
    name: 'RichText',
    type: 'array',
    of: [
        {
            type: 'block'
        },
        {
            type: 'image',
            fields: [
                {
                    type: 'text',
                    name: 'alt',
                    title: 'Альтернативный текст',
                    description: 'Альтернативый текст',
                    options: {
                      isHighlighted: true
                    }
                }
            ]
        }
    ]
  }

