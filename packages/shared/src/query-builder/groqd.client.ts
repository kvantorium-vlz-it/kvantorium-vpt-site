import { createGroqBuilderWithZod } from 'groqd'
import type * as SanityTypes  from '@/.shared/sanity.types.ts'

export type GroqdSchemaConfig = {
    schemaTypes: SanityTypes.AllSanitySchemaTypes
    referenceSymbol: typeof SanityTypes.internalGroqTypeReferenceTo
}

export const q = createGroqBuilderWithZod<GroqdSchemaConfig>()
