import { defineStore } from 'pinia'

const query = groq`*[_type == "Document"]{
    name, isCurriculum,
    'file': file.asset->url
}`

interface IDocument {
    name: string;
    file: string;
    isCurriculum: boolean;
}

export const useDocumentsStore = defineStore('documents', () => {
    const { data, refresh } = useSanityQuery<IDocument[]>(query)

    const list = computed(() => data.value)
    const curriculums = computed(() => list.value.filter(document => document.isCurriculum))
    const listWithoutCurriculums = computed(() => list.value.filter(item => curriculums.value.includes(item)))

    return {
        refresh,
        curriculums,
        list,
        listWithoutCurriculums,
    }
})
