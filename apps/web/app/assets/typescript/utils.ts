export const dateToSanityDate = (date: Date) => {
    return date.toISOString().split('T')[0]
}
