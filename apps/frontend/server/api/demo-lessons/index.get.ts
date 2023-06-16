import { DemoLesson } from '@types'

const query = groq`*[_type == 'demoLesson'] {
    'id': _id,
      name,
      fromAge,
      toAge,
      fromTime,
      duration,
      'teacher': teacher->_id,
      'kvantum': kvantum->_id,
}`

export default defineEventHandler(async () => {
    return await useSanity().fetch<DemoLesson[]>(query)
})
