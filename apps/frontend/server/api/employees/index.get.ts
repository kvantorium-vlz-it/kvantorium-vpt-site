import { Employee } from '~/assets/typescript/types'

const query = groq`*[_type == 'employee'] {
    'id': _id,
    firstName,
      secondName,
      middleName,
}`

export default defineEventHandler(async () => {
    return await useSanity().fetch<Employee[]>(query)
})
