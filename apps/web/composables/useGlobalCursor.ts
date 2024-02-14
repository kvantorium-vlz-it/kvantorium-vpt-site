import { createGlobalState } from '@vueuse/core'

function useGlobalCursorPrivate<
    _C extends Component
>() {
    const _cursor = useDynamicComponent()
    const _cursorTransition = useDynamicComponent()
    const _fallbackTransition = useDynamicComponent()

    const _isVisibleGlobalCursor = ref<boolean>(true)

    function toggleCursor(isVisible = !_isVisibleGlobalCursor.value) {
        _isVisibleGlobalCursor.value = isVisible
    }

    return {
        Cursor: _cursor.Component,
        cursorAttrs: _cursor.attrs,
        CursorTransition: _cursorTransition.Component,
        cursorTransitionAttrs: _cursorTransition.attrs,
        FallbackTransition: _fallbackTransition.Component,
        fallbackTransitionAttrs: _fallbackTransition.attrs,
        isVisibleGlobalCursor: readonly(_isVisibleGlobalCursor),
        setCursorComponent: _cursor.setComponent,
        clearCursor: _cursor.clearComponent,
        setCursorTrasitionComponent: _cursorTransition.setComponent,
        clearCursorTransition: _cursorTransition.clearComponent,
        setFallbackTransitionComponent: _fallbackTransition.setComponent,
        clearFallbackTransition: _fallbackTransition.clearComponent,
        toggleCursor,
    }
}

const useGlobalCursor = createGlobalState(useGlobalCursorPrivate)

export { useGlobalCursor }
