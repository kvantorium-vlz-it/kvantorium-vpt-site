import { DOCUMENT_TYPES } from "@kvantoriumvlz/shared"
import { InferFragmentType } from "groqd"
import { createImageAssetFragment, createImageCropFragment } from "./image.ts"
import { createFragment } from "@/utils.ts"

export const createEmployeeFragment = createFragment((q) => q
    .fragmentForType<typeof DOCUMENT_TYPES.EMPLOYEE>()
    .project((sub) => ({
        _id: true,
        _type: true,
        name: true,
        surname: true,
        patronymic: true,
        description: true,
        isTeacher: true,
        image: sub.field('image').project((sub) => ({
            _type: true,
            asset: sub.field('asset').deref().project(createImageAssetFragment(q)),
            crop: sub.field('crop').project(createImageCropFragment(q)),
        })),
    }))
)

export type EmployeeResult = InferFragmentType<ReturnType<typeof createEmployeeFragment>>
