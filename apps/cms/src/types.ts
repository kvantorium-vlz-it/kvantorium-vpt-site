import { CURRICULUM_LEVEL } from "./constants"

export type CurriculumLevelValue = keyof typeof CURRICULUM_LEVEL
export type CurriculumLevelKey = typeof CURRICULUM_LEVEL[CurriculumLevelValue]
