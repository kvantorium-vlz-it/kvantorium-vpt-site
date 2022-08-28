/**
 * Composable for open/close stale in component
 * 
 * @param initialIsOpen is open on initial
 */
export const useOpenable = (initialIsOpen: boolean = false) => {
    /**
     * Open/close state
     */
    const isOpened = ref<boolean>(initialIsOpen)

    /**
     * Open function
     * @returns {true} new state
     */
    const open = (): true => isOpened.value = true

    /**
     * Close function
     * @returns { false } new state
     */
    const close = (): false => isOpened.value = false

    /**
     * Toggle function
     * @returns { boolean } new state
     */
    const toggle = (): boolean => isOpened.value = !isOpened.value

    return {
        isOpened,
        open,
        close,
        toggle,
    }
}