import { CURRICULUM_LEVEL } from "@constants"
import { Fragment, GroqBuilderWithZod, InferFragmentType } from "groqd"
import { GroqdSchemaConfig } from "./query-builder"

export const getCurriculumLevelLabel = (
    level: typeof CURRICULUM_LEVEL[keyof typeof CURRICULUM_LEVEL]
) => {
    if (level === CURRICULUM_LEVEL.INTRODUCTORY) {
        return 'вводный'
    } else if (level === CURRICULUM_LEVEL.ADVANCED) {
        return 'углубленный'
    } else {
        return 'проектный'
    }
}

type CreateFragmentFn<
    TProjectionMap,
    TFragmentInput,
    GroqdBuilder extends GroqBuilderWithZod<GroqdSchemaConfig> = GroqBuilderWithZod<GroqdSchemaConfig>
> = (q: GroqdBuilder) => Fragment<TProjectionMap, TFragmentInput>

export const createFragment = <
    TProjectionMap,
    TFragmentInput,
    GroqdBuilder extends GroqBuilderWithZod<GroqdSchemaConfig> = GroqBuilderWithZod<GroqdSchemaConfig>
>(
    fn: CreateFragmentFn<TProjectionMap, TFragmentInput, GroqdBuilder>
) => (q: GroqdBuilder) => fn(q)
