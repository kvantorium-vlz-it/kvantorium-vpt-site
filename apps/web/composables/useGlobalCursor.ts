import { createGlobalState } from '@vueuse/core'
import type { AllowedComponentProps, VNodeProps } from 'vue'

export type ComponentProps<
    C extends Component
> = C extends new (...args: any) => any
    ? Omit<
        InstanceType<C>['$props'],
        keyof VNodeProps | keyof AllowedComponentProps
    >
    : never

export type AllComponentProps<
    C extends Component
> = C extends new (...args: any) => any
    ? InstanceType<C>['$props']
    : never

function useCursorGlobalPrivate<
    _C extends Component
>() {
    const _CursorComponent = shallowRef<_C | null>(null)
    const _attrs = shallowRef<AllComponentProps<_C> | null>(null)

    const _isVisibleGlobalCursor = ref<boolean>(true)

    function setCursorComponent<C extends Component = _C>(
        component: C | null = null,
        attrs: AllComponentProps<C> | null = null,
    ) {
        _CursorComponent.value = component
        _attrs.value = attrs
    }

    const clearCursor = () => {
        setCursorComponent()
    }

    function toggleCursor(isVisible = !_isVisibleGlobalCursor.value) {
        _isVisibleGlobalCursor.value = isVisible
    }

    return {
        Cursor: readonly(_CursorComponent),
        cursorAttrs: readonly(_attrs),
        isVisibleGlobalCursor: readonly(_isVisibleGlobalCursor),
        setCursorComponent,
        clearCursor,
        toggleCursor,
    }
}

const useCursorGlobal = createGlobalState(useCursorGlobalPrivate)

export { useCursorGlobal }
