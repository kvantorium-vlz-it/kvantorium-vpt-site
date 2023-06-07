import { Curriculum } from '@types'

const query = groq`*[_type == 'curriculum'] {
    'id': _id,
        name,
        fromAge,
        toAge,
        'kvantum': kvantum->_id,
        'file': file.asset->url,
        'teacher': teacher->_id,
        projectExamples,
}`

export default defineEventHandler(async () => {
    return await useSanity().fetch<Curriculum[]>(query)
})
