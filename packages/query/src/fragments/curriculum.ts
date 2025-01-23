import { DOCUMENT_TYPES } from "@kvantoriumvlz/shared"
import { InferFragmentType } from "groqd"
import { portableTextProjection, PortableTextResult } from "./raw/portableText.ts"
import { createFragment } from "@/utils.ts"

export const createCurriculumFragment = createFragment((q) => q
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
            .raw<PortableTextResult[]>((`{${portableTextProjection}}`))
    }))
)

export type CurriculumResult = InferFragmentType<ReturnType<typeof createCurriculumFragment>>
