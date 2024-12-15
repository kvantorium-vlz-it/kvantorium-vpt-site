export interface Kvantum {
    name: string
    slug: string
    topics: string[]
    icon: string,
    description: any[]
    minimalAge: number
}

interface ImageWithAlternativeText {
    src: string
    alt: string
}

interface NewsTag {
    _id: string
    name: string
}

export interface News {
    publishDate: string
    tags: NewsTag[]
    gallery: ImageWithAlternativeText[]
    title: string
    slug: string
    _id: string
    content: any[]
    previewImage: ImageWithAlternativeText,
}

export interface Employee {
    _id: string
    surname: string
    name: string
    patronymic: string
    description: string
    isTeacher: boolean
    imageURL: string
}
