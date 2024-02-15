import type { AllowedComponentProps, VNodeProps } from "vue"

export type ComponentProps<
    C extends Component = Component
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

export interface ChangeComponentOptions<C extends Component = Component> {
    component: C
    attrs: AllComponentProps<C>
}

export interface ClearComponentOptions {
    component: null
    attrs: null
}

export type SetComponentOptions<
    C extends Component = Component
> = ChangeComponentOptions<C>
    | ClearComponentOptions

function useDynamicComponent<_C extends Component>(
    initialComponent: _C | null = null,
    initialAttrs: AllComponentProps<_C> | null = null,
) {
    const _Component = shallowRef<_C | null>(initialComponent)
    const _attrs = shallowRef<AllComponentProps<_C> | null>(initialAttrs)

    function setComponent<
        C extends Component = _C
    >(options: SetComponentOptions<C> | null = null) {
        _Component.value = options?.component || null
        _attrs.value = options?.attrs || null
    }

    function clearComponent() {
        setComponent()
    }

    return {
        Component: shallowReadonly(_Component),
        attrs: shallowReadonly(_attrs),
        setComponent,
        clearComponent,
    }
}

export { useDynamicComponent }
