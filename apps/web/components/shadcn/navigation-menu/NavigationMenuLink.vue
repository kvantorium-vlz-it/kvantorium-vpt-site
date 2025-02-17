<script lang="ts">
import type { NavigationMenuLinkEmits, NavigationMenuLinkProps } from 'radix-vue'
import type { BaseLinkProps } from '~/components/shared/Navigation/BaseLink.vue'
import { NavigationMenuLink } from 'radix-vue'
import { useForwardPropsEmits } from 'radix-vue'

interface ShadcnNavigationMenuLinkBaseProps {
    size?: BaseLinkProps['size']
    color?: BaseLinkProps['color']
    class?: BaseLinkProps['class']
    to?: BaseLinkProps['to']
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
    const { class: _, size, color, to, ...delegated } = props

    return delegated
})

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
    <BaseLink
        :color="color"
        :size="size"
        :to="to"
        as-child
    >
        <NavigationMenuLink
            v-bind="forwarded"
            as-child
        >
            <NuxtLink>
                <slot />
            </NuxtLink>
        </NavigationMenuLink>
    </BaseLink>
</template>
