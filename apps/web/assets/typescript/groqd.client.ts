import { type GroqdSchemaConfig } from "@kvantoriumvlz/shared"
import { createGroqBuilderWithZod } from "groqd"

export const q = createGroqBuilderWithZod<GroqdSchemaConfig>()
