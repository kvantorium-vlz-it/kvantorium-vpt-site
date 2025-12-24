import type * as SanityTypes from "@kvantoriumvlz/schema/sanity.types.ts"
import { q } from "./builder"
import { DOCUMENT_TYPES } from "@kvantoriumvlz/shared"
import type { InferFragmentType } from "groqd"

export const imageProjection = q.fragment<SanityTypes.SanityImageAsset>().project({
    assetId: true,
    altText: true,
})

export const newsProjection = q
    .fragment<SanityTypes.KvantoriumNews>()
    .project((s) => ({
        _id: true,
        _type: true,
        title: true,
        publishDate: true,
        content: true,
        previewImage: s.field('previewImage.asset').deref().project(imageProjection),
        slug: s.field('slug.current'),
        tags: s.field('tags[]').deref().project({
            name: true,
            _id: true,
        }),
        gallery: s.field('gallery[].asset').deref().project(imageProjection),
    }))

export type NewsProjection = InferFragmentType<typeof newsProjection>


export const employeeProjection = q
    .fragment<SanityTypes.KvantoriumEmployee>()
    .project((s) => ({
        _type: true,
        _id: true,
        name: true,
        patronymic: true,
        surname: true,
        isTeacher: true,
        description: true,
        image: s.field('image.asset').deref().project(imageProjection)
    }))

export type EmployeeProjection = InferFragmentType<typeof employeeProjection>


const teacherInfoProjection = q
    .fragment<SanityTypes.KvantoriumEmployee>()
    .project((s) => ({
        _id: true,
        _type: true,
        name: true,
        surname: true,
        patronymic: true,
    }))


export const kvantumProjection = q
    .fragment<SanityTypes.KvantoriumKvantum>()
    .project((s) => ({
        _id: true,
        _type: true,
        name: true,
        slug: s.field('slug.current'),
        icon: s.field('icon.asset').deref().project(imageProjection),
        description: true,
        'minimalAge': s
            .star
            .filterByType(DOCUMENT_TYPES.CURRICULUM)
            .filter('references(^._id)')
            .order('minimalAge asc')
            .slice(0)
            .project({ minimalAge: true })
            .field('minimalAge')
    }))

export type KvantumProjection = InferFragmentType<typeof kvantumProjection>


export const curriculumProjection = q
    .fragment<SanityTypes.KvantoriumCurriculum>()
    .project((s) => ({
        _id: true,
        _type: true,
        name: true,
        hoursPerYear: true,
        level: true,
        minimalAge: true,
        schedule: true,
        studentsInGroup: true,
        description: true,
        teacher: s.field('teacher').deref().project(teacherInfoProjection),
        kvantum: s.field('kvantum').deref().project((s) => ({
            slug: s.field('slug.current'),
            _id: true,
            _type: true,
            name: true,
        }))
    }))

export type CurriculumProjection = InferFragmentType<typeof curriculumProjection>


export const eventsProjection = q
    .fragment<SanityTypes.KvantoriumEvents>()
    .project((s) => ({
        _type: true,
        _id: true,
        name: true,
        slug: s.field('slug.current'),
        previewImage: s.field('previewImage.asset').deref().project(imageProjection),
        eventSteps: s.field('eventSteps[]').project((s) => ({
            date: true,
            step: true,
            images: s.field('images[].asset').deref().project(imageProjection),
            description: true,
        }))
    }))

export type EventsProjection = InferFragmentType<typeof eventsProjection>


export const settingsProjection = q
    .fragment<SanityTypes.KvantoriumSettings>()
    .project((s) => ({
        _id: true,
        _type: true,
        documents: s.field('documents[].file.asset').deref().project({
            url: true,
        }),
        about: true,
        collegeContacts: true,
        kvantoriumContacts: true,
    }))

export type SettingsProjection = InferFragmentType<typeof settingsProjection>


export const newsTagProjection = q
    .fragment<SanityTypes.KvantoriumNewsTag>()
    .project({
        _id: true,
        _type: true,
        name: true,
    })

export type NewsTagProjection = InferFragmentType<typeof newsTagProjection>
