import { News } from '~/assets/typescript/types'

const query = groq`*[_type == 'news'] | order(date){
    'id': _id,
    date,
    heading,
    content,
    'images': images[].asset->url
}`

export default defineEventHandler(async () => {
    return await useSanity().fetch<News[]>(query)
})
