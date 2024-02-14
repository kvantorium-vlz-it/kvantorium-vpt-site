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

function useDynamicComponent<_C extends Component>(
    initialComponent: _C | null = null,
    initialAttrs: AllComponentProps<_C> | null = null,
) {
    const _Component = shallowRef<_C | null>(initialComponent)
    const _attrs = shallowRef<AllComponentProps<_C> | null>(initialAttrs)

    function setComponent<C extends Component>(
        component: Component | null = null,
        attrs: AllComponentProps<C> | null = null,
    ) {
        _Component.value = component
        _attrs.value = attrs
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
