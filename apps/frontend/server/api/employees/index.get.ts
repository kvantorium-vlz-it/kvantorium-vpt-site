import { Employee } from '@types'

const query = groq`*[_type == 'employee'] {
    'id': _id,
    firstName,
    lastName,
    patronymic,
}`

export default defineEventHandler(async () => {
    return await useSanity().fetch<Employee[]>(query)
})
