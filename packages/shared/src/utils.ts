import { CURRICULUM_LEVEL } from './enums.js'
import { CurriculumLevelKey } from './types.js'

export function capitalizeFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
}

export function getCurriculumLevelLabel(level: CurriculumLevelKey) {
    switch (level) {
        case CURRICULUM_LEVEL.INTRODUCTORY:
            return 'вводный'
        case CURRICULUM_LEVEL.ADVANCED:
            return 'углубленный'
        case CURRICULUM_LEVEL.PROJECT:
            return 'проектный'
        default:
            throw new RangeError("Unknown curriculum level.")
    }
}
