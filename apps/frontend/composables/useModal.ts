const isOpened = ref<boolean>(false)

export const useModal = () => {
    function open() {
        isOpened.value = true
    }

    function close() {
        isOpened.value = false
    }

    function toggle() {
        isOpened.value = !isOpened.value
    }

    return {
        isOpened,
        open,
        close,
        toggle,
    }
}
