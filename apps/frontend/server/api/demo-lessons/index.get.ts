import { DemoLesson } from '~/assets/typescript/types'

const query = groq`*[_type == 'demoLesson'] {
    'id': _id,
      name,
      fromAge,
      toAge,
      fromTime,
      toTime,
      date,
      'teacher': teacher->_id,
      'image': image.asset->url
}`

export default defineEventHandler(async () => {
    return await useSanity().fetch<DemoLesson[]>(query)
})
