export function modulusLoop(index: number, length: number, delta: number) {
    return (index + length + delta) % length
}

export function clamp(value: number, min: number, max: number) {
    return Math.max(Math.min(value, max), min)
}
