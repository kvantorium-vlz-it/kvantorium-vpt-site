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

    return {
        Cursor: readonly(_CursorComponent),
        cursorAttrs: readonly(_attrs),
    }
}

const useCursorGlobal = createGlobalState(useCursorGlobalPrivate)

export { useCursorGlobal }
