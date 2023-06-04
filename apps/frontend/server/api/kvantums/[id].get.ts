import { Kvantum } from '@kvantorium-vpt-site/sanity-schema'

export default defineEventHandler(async (event) => {
    const id = getQuery(event).id
    const query = groq`*[_type == 'kvantum' && _id == ${id}]`

    return await useSanity().fetch<Kvantum | undefined>(query)
})
