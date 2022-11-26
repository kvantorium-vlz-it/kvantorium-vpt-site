import { defineStore } from "pinia"

const query = groq`*[_type == "File"] {
    'id': _id,
    'file': file.asset->url,
    isCurriculum,
    label,
}`

interface IFile {
    id: string
    file: string
    label: string
    isCurriculum: boolean
}

export const useFilesStore = defineStore('files', () => {
    const { data } = useSanityQuery<IFile[]>(query)

    const files = computed<IFile[]>(() => data.value || [])

    const curriculums = computed<IFile[]>(() => files.value.filter((f) => f.isCurriculum))
    const regularFiles = computed<IFile[]>(() => files.value.filter((f) => !f.isCurriculum))

    return {
        files,
        curriculums,
        regularFiles,
    }
})
