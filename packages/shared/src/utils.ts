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

type RangeValueOptions = {
    bound: number
    strict?: boolean
}

type RangeOptions = {
    min?: RangeValueOptions
    max: RangeValueOptions
}

function _transformRangeOptionsToStrict(options: RangeOptions) {
    const {
        bound: maxBound,
        strict: maxStrict = true,
    } = options.max

    const {
        bound: minBound = 0,
        strict: minStrict = true,
    } = options.min || {}

    const max = maxStrict ? maxBound : maxBound - 1
    const min = minStrict ? minBound : minBound + 1

    return {
        max,
        min,
    }
}

export function modulusLoop(
    value: number,
    options: RangeOptions,
) {
    const { max, min } = _transformRangeOptionsToStrict(options)

    const length = max - min + 1
    const mod = (value - min) % length

    return min + (mod < 0 ? mod + length : mod)
}

export function clamp(value: number, options: RangeOptions) {
    const { max, min } = _transformRangeOptionsToStrict(options)

    return Math.max(Math.min(value, max), min)
}
