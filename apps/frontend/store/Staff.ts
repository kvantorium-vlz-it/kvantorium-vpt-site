import { defineStore } from 'pinia'

const query = groq`*[_type == "Staff"]{
    'id': _id,
    firstName,
    secondName,
    middleName,
    isTeacher,
    'position': position->name,
}`

export interface IStaff {
    id: string
    firstName: string
    secondName: string
    middleName: string
    isTeacher: string
    position: string
}

export const useStaffStore = defineStore('staff', () => {
    const { data } = useSanityQuery<IStaff[]>(query)

    const staff = computed<IStaff[]>(() => data.value || [])

    return {
        staff
    }
})
