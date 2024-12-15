import { CURRICULUM_LEVEL } from "../constants";

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
