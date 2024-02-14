import { createGlobalState } from '@vueuse/core'

export type ComponentProps<
    C extends Component
> = C extends new (...args: any) => any
    ? InstanceType<C>['$props']
    : never

function useCursorGlobalPrivate<
    _C extends Component
>() {
    const _CursorComponent = shallowRef<_C | null>(null)
    const _attrs = shallowRef<ComponentProps<_C> | null>(null)

    return {
        Cursor: readonly(_CursorComponent),
        cursorAttrs: readonly(_attrs),
    }
}

const useCursorGlobal = createGlobalState(useCursorGlobalPrivate)

export { useCursorGlobal }
