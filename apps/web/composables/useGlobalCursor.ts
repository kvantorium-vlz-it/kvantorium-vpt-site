import { createGlobalState } from '@vueuse/core'
import type { AllowedComponentProps, Component, ShallowRef, VNodeProps } from 'vue'

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
    const _cursorAttrs = shallowRef<AllComponentProps<_C> | null>(null)

    const _TransitionComponent = shallowRef<Component | null>(null)
    const _transitionAttrs = shallowRef<AllComponentProps<_C> | null>(null)

    const _isVisibleGlobalCursor = ref<boolean>(true)

    function setComponent<C extends Component>(
        target: ShallowRef<Component | null>,
        targetAttrs: ShallowRef<AllComponentProps<C> | null>,
        newComponent: Component | null,
        newAttrs: AllComponentProps<C> | null,
    ) {
        target.value = newComponent
        targetAttrs.value = newAttrs
    }

    function setCursorComponent<C extends Component = _C>(
        component: C | null = null,
        attrs: AllComponentProps<C> | null = null,
    ) {
        setComponent(_CursorComponent, _cursorAttrs, component, attrs)
    }

    function clearCursor() {
        setCursorComponent()
    }

    function setTrasitionComponent<C extends Component = _C>(
        component: C | null = null,
        attrs: AllComponentProps<C> | null = null,
    ) {
        setComponent(_TransitionComponent, _transitionAttrs, component, attrs)
    }

    function clearTransition() {
        setTrasitionComponent()
    }

    function toggleCursor(isVisible = !_isVisibleGlobalCursor.value) {
        _isVisibleGlobalCursor.value = isVisible
    }

    return {
        Cursor: shallowReadonly(_CursorComponent),
        cursorAttrs: readonly(_cursorAttrs),
        TransitionComponent: shallowReadonly(_TransitionComponent),
        transitionAttrs: readonly(_transitionAttrs),
        isVisibleGlobalCursor: readonly(_isVisibleGlobalCursor),
        setCursorComponent,
        clearCursor,
        setTrasitionComponent,
        clearTransition,
        toggleCursor,
    }
}

const useCursorGlobal = createGlobalState(useCursorGlobalPrivate)

export { useCursorGlobal }
