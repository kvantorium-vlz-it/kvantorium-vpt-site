import { DOCUMENT_TYPES } from "@kvantoriumvlz/shared"
import { InferFragmentType } from "groqd"
import { portableTextRawFragment, PortableTextFragment } from "./raw/portableText.ts"
import { Builder, q } from "@/groqd.client.ts"

export const curriculumFragmentFactory = (q: Builder) => q
    .fragmentForType<typeof DOCUMENT_TYPES.CURRICULUM>()
    .project((sub) => ({
        _id: true,
        _type: true,
        name: true,
        hoursPerYear: true,
        level: true,
        minimalAge: true,
        schedule: true,
        studentsInGroup: true,
        kvantum: sub.field('kvantum').deref().project((sub) => ({
            slug: sub.field('slug').field('current'),
            _id: true,
            _type: true,
            name: true,
        })),
        teacher: sub.field('teacher').deref().project({
            _id: true,
            _type: true,
            name: true,
            surname: true,
            patronymic: true,
        }),
        description: sub
            .field('description[]')
            .raw<PortableTextFragment[]>((`{${portableTextRawFragment}}`))
    }))

export type CurriculumFragment = InferFragmentType<typeof curriculumFragmentFactory>
