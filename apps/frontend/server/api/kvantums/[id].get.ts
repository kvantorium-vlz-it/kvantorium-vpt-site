import { Kvantum } from '@types'

export default defineEventHandler(async (event) => {
    const id = getQuery(event).id
    const query = groq`*[_type == 'kvantum' && _id == ${id}] {
        'icon': icon.asset-> url,
        'promoImage': promoImage.asset -> url,
        description,
        name,
        isAdditional,
        'id': _id,
    }`

    return await useSanity().fetch<Kvantum | undefined>(query)
})
