import { createGroqBuilderWithZod, GroqBuilderWithZod } from 'groqd'
import * as SanityTypes from '@kvantoriumvlz/schema/sanity.types.ts'

export type GroqdSchemaConfig = {
    schemaTypes: SanityTypes.AllSanitySchemaTypes
    referenceSymbol: typeof SanityTypes.internalGroqTypeReferenceTo
}

export const q = createGroqBuilderWithZod<GroqdSchemaConfig>()

export type { SanityTypes }

export type Builder = GroqBuilderWithZod<GroqdSchemaConfig>
