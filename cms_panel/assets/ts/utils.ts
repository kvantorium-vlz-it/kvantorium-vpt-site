export const onlyUniqueFilter = (value, index, self) => {
    return self.indexOf(value) === index
}

export const requiredFieldValidation = Rule => Rule
    .required()
    .error('Поле обязательно для заполнения')
