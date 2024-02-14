import { createGlobalState } from '@vueuse/core'
import type { AllowedComponentProps, Component, ShallowRef, VNodeProps } from 'vue'

interface ComponentOptions<C extends Component = Component> {
    Component: C
    attrs: ComponentProps<C>
}

function useCursorGlobalPrivate<
    _C extends Component
>() {
    const cursor = useDynamicComponent()
    const cursorTransition = useDynamicComponent()

    const _isVisibleGlobalCursor = ref<boolean>(true)

    function toggleCursor(isVisible = !_isVisibleGlobalCursor.value) {
        _isVisibleGlobalCursor.value = isVisible
    }

    return {
        Cursor: cursor.Component,
        cursorAttrs: cursor.attrs,
        TransitionComponent: cursorTransition.Component,
        transitionAttrs: cursorTransition.attrs,
        isVisibleGlobalCursor: readonly(_isVisibleGlobalCursor),
        setCursorComponent: cursor.setComponent,
        clearCursor: cursor.clearComponent,
        setTrasitionComponent: cursorTransition.setComponent,
        clearTransition: cursorTransition.clearComponent,
        toggleCursor,
    }
}

const useCursorGlobal = createGlobalState(useCursorGlobalPrivate)

export { useCursorGlobal }
