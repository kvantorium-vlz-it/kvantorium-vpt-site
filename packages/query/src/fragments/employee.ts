import { DOCUMENT_TYPES } from "@kvantoriumvlz/shared"
import { InferFragmentType } from "groqd"
import { imageAssetFragmentFactory, imageCropFragmentFactory } from "./image.ts"
import { createFragmentFactory } from "@/utils.ts"

export const employeeFragmentFactory = createFragmentFactory((q) => q
    .fragmentForType<typeof DOCUMENT_TYPES.EMPLOYEE>()
    .project((sub) => ({
        _id: true,
        _type: true,
        name: true,
        surname: true,
        patronymic: true,
        description: true,
        isTeacher: true,
        image: sub.field('image')
            .project((sub) => ({
                _type: true,
                asset: sub.field('asset').deref().project(imageAssetFragmentFactory(q)),
                crop: sub.field('crop').project(imageCropFragmentFactory(q)),
            })),
    }))
)

export type EmployeeFragment = InferFragmentType<ReturnType<typeof employeeFragmentFactory>>
