import groq from "groq";
import { CURRICULUM_LEVEL, DOCUMENT_TYPES } from "../../constants.js";
import { portableTextQueryFieldsFragment, PortableTextQueryResult } from "../common/portableText.js";

export const curriculumQueryFilterFragment = groq`_type == '${DOCUMENT_TYPES.CURRICULUM}'`

export const curriculumQueryFieldsFragment = groq`
    _id,
    _type,
    level,
    name,
    minimalAge,
    hoursPerYear {
        firstHalf,
        secondHalf,
    },
    studentsInGroup,
    schedule {
        hours,
        count,
    },
    'teacher': teacher-> {
      _type,
      _id,
    },
    'kvantum': kvantum-> {
      _id,
      _type,
      'slug': slug.current,
    },
    description[] { ${portableTextQueryFieldsFragment} }
`

export type CurriculumQueryResult = {
    _id: string
    _type: typeof DOCUMENT_TYPES.CURRICULUM
    level: typeof CURRICULUM_LEVEL[keyof typeof CURRICULUM_LEVEL]
    name: string
    minimalAge: number
    hoursPerYear: {
        firstHalf: number
        secondHalf: number
    }
    studentsInGroup: number
    schedule: {
        hours: number
        count: number
    }
    description: PortableTextQueryResult[]
    kvantum: {
        _id: string
        type: typeof DOCUMENT_TYPES.KVANTUM
        slug: string
    }
    teacher: {
        _type: typeof DOCUMENT_TYPES.EMPLOYEE
        _id: string
    }
}
