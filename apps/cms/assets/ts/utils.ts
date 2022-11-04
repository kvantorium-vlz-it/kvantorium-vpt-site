export const onlyUniqueFilter = (value, index, self) => {
    return self.indexOf(value) === index
}

export const onlyUniqueObjectsFilter =(value, index, self) => {
}

export const requiredFieldValidation = Rule => Rule
    .required()
    .error('Поле обязательно для заполнения')
