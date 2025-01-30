import { type GroqdSchemaConfig } from "@kvantoriumvlz/query"
import { createGroqBuilderWithZod } from "groqd"

export const q = createGroqBuilderWithZod<GroqdSchemaConfig>()
