<script lang="ts">
import type { NavigationMenuLinkEmits, NavigationMenuLinkProps } from 'radix-vue'
import type { HTMLAttributes } from 'vue'
import { NavigationMenuLink } from 'radix-vue'
import { useForwardPropsEmits } from 'radix-vue'

interface ShadcnNavigationMenuLinkBaseProps {
    class?: HTMLAttributes['class']
}

export interface ShadcnNavigationMenuLinkProps
extends
    NavigationMenuLinkProps,
    ShadcnNavigationMenuLinkBaseProps
{}
</script>

<script setup lang="ts">
const props = defineProps<ShadcnNavigationMenuLinkProps>()
const emits = defineEmits<NavigationMenuLinkEmits>()

const delegatedProps = computed(() => {
    const { class: _, ...delegated } = props

    return delegated
})

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
    <NavigationMenuLink
        v-bind="forwarded"
    >
            <slot />
    </NavigationMenuLink>
</template>
