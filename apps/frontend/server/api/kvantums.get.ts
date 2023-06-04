import { Kvantum } from '@kvantorium-vpt-site/sanity-schema'

const query = groq`*[_type == 'kvantum']`

export default defineEventHandler(async () => {
    return await useSanity().fetch<Kvantum[]>(query)
})
