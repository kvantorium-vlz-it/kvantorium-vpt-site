import { DOCUMENT_TYPES } from "@constants"
import { q } from "@/query-builder/groqd.client.ts"
import { InferFragmentType } from "groqd"
import { imageAssetFragment, imageCropFragment } from "./image.ts"

export const employeeFragment = q
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
            asset: sub.field('asset').deref().project(imageAssetFragment),
            crop: sub.field('crop').project(imageCropFragment),
        })),
    }))

export type EmployeeResult = InferFragmentType<typeof employeeFragment>
