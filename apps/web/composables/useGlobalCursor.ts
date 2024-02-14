import { createGlobalState } from '@vueuse/core'

export type ComponentProps<
    C extends Component
> = C extends new (...args: any) => any
    ? InstanceType<C>['$props']
    : never

