import groq from "groq"
import { DOCUMENT_TYPES } from "../constants.js"
import { imageQueryFieldsFragment, ImageQueryResult } from "./image.js"

export const employeeQueryFilterFragment = groq`_type == '${DOCUMENT_TYPES.EMPLOYEE}'`

export const employeeQueryFieldsFragment = groq`
    _id,
    _type,
    description,
    image { ${imageQueryFieldsFragment} },
    isTeacher,
    name,
    patronymic,
    surname,
`

export type EmployeeQueryResult = {
    _id: string
    _type: typeof DOCUMENT_TYPES.EMPLOYEE
    description: string
    image: ImageQueryResult
    isTeacher: boolean
    name: string
    patronymic: string
    surname: string
}
