/**
 * Capitalized first letter at passed string
 * @param { string } target string to modify
 */
export const capitalizeFirstLetter = (target: string): string => {
    return target.at(0).toUpperCase() + target.slice(1)
}
