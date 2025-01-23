import { Fragment, GroqBuilderWithZod, GroqBuilder, InferFragmentType } from "groqd"
import { GroqdSchemaConfig } from "./groqd.client"

type Builder = GroqBuilderWithZod<GroqdSchemaConfig>

type CreateFragmentFactoryFn<
    TProjectionMap,
    TFragmentInput,
    GroqdBuilder extends Builder = GroqBuilderWithZod<GroqdSchemaConfig>
> = (q: GroqdBuilder) => Fragment<TProjectionMap, TFragmentInput>

export const createFragmentFactory = <
    TProjectionMap,
    TFragmentInput,
    GroqdBuilder extends Builder = GroqBuilderWithZod<GroqdSchemaConfig>
>(
    fn: CreateFragmentFactoryFn<TProjectionMap, TFragmentInput, GroqdBuilder>
) => (q: GroqdBuilder) => fn(q)
