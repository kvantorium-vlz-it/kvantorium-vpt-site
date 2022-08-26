/**
 * Composable for easily using dropdowns
 * 
 * @param initialIsOpen is open dropdown on initial
 */
export const useDropdown = (initialIsOpen: boolean = false) => {
    /**
     * Flag for open/close dropdown
     */
    const isOpened = ref<boolean>(initialIsOpen)

    /**
     * Open dropdown function
     * @returns { true } flag dropdown is opened
     */
    const open = (): true => isOpened.value = true

    /**
     * Close dropdown function
     * @returns { false } flag dropdown is closed
     */
    const close = (): false => isOpened.value = false

    /**
     * Toggle dropdown function
     * @returns { boolean } flag dropdown new state
     */
    const toggle = (): boolean => isOpened.value = !isOpened.value

    return {
        isOpened,
        open,
        close,
        toggle,
    }
}