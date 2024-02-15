import { createGlobalState } from '@vueuse/core'
import type { SetComponentOptions } from './useDynamicComponent'

export interface ChangeCursorOptions<
    C extends Component = Component,
    CT extends Component = Component,
    FT extends Component = Component,
> {
    cursor?: SetComponentOptions<C>
    cursorTransition?: SetComponentOptions<CT>
    fallbackTransition?: SetComponentOptions<FT>
}

const defaultSetCursorOptions: ChangeCursorOptions<any, any, any> = {
    cursor: undefined,
    cursorTransition: undefined,
    fallbackTransition: undefined,
}

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

    function changeCursor<C extends Component = _C>({
        cursor,
        cursorTransition,
        fallbackTransition,
    }: ChangeCursorOptions<C> = defaultSetCursorOptions) {
        if (cursor) {
            _cursor.setComponent(cursor)
        }

        if (cursorTransition) {
            _cursorTransition.setComponent(cursorTransition)
        }

        if (fallbackTransition) {
            _fallbackTransition.setComponent(fallbackTransition)
        }
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
        changeCursor,
    }
}

const useGlobalCursor = createGlobalState(useGlobalCursorPrivate)

export { useGlobalCursor }
