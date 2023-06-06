import { Kvantum } from '~/assets/typescript/types'

const query = groq`*[_type == 'kvantum'] {
    'icon': icon.asset-> url,
    'promoImage': promoImage.asset -> url,
    description,
    name,
    isAdditional,
    'id': _id,
}`

export default defineEventHandler(async () => {
    return await useSanity().fetch<Kvantum[]>(query)
})
