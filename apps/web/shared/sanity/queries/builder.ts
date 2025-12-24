import { createGroqBuilder } from 'groqd'
import type * as SanityTypes from "@kvantoriumvlz/schema/sanity.types.ts"

export const q = createGroqBuilder<{
    schemaTypes: SanityTypes.AllSanitySchemaTypes
    referenceSymbol: typeof SanityTypes.internalGroqTypeReferenceTo;
}>();
