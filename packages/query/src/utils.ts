import { Fragment, GroqBuilderWithZod } from "groqd"
import { GroqdSchemaConfig } from "./groqd.client"

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
