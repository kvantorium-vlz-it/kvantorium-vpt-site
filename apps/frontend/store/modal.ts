import { defineStore } from 'pinia';

export const useModalStore = defineStore('modal', () => {
    const isOpened = ref<boolean>(false)

    function open() {
        isOpened.value = true
    }

    function close() {
        isOpened.value = false
    }

    return {
        isOpened,
        open,
        close,
    }
})
