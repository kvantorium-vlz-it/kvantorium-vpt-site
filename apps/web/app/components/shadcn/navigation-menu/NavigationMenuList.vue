<script lang="ts">
import type { HTMLAttributes } from 'vue'
import type { NavigationMenuListProps } from 'radix-vue'
import { NavigationMenuList,  useForwardProps } from 'radix-vue'
import { cn } from '@/lib/utils'

interface ShadcnNavigationMenuListBaseProps {
    class?: HTMLAttributes['class']
}

export interface ShadcnNavigationMenuListProps
extends
    NavigationMenuListProps,
    ShadcnNavigationMenuListBaseProps
{}
</script>

<script setup lang="ts">
const props = defineProps<ShadcnNavigationMenuListProps>()

const delegatedProps = computed(() => {
    const { class: _, ...delegated } = props

    return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
    <NavigationMenuList
        v-bind="forwardedProps"
        :class="
        cn(
            'group flex flex-1 list-none items-center justify-center gap-x-1',
            props.class,
        )
        "
    >
        <slot />
    </NavigationMenuList>
</template>
