<script lang="ts">
import type { NavigationMenuTriggerProps } from 'radix-vue'
import type { HTMLAttributes } from 'vue'
import type { BaseLinkProps } from '~/components/shared/Navigation/BaseLink.vue'
import { NavigationMenuTrigger, useForwardProps } from 'radix-vue'
import { cn } from '@/lib/utils'
import { ChevronDownIcon } from 'lucide-vue-next'

interface ShadcnNavigationMenuTriggerBaseProps {
    class?: HTMLAttributes['class']
}

export interface ShadcnNavigationMenuTriggerProps
extends
    NavigationMenuTriggerProps,
    ShadcnNavigationMenuTriggerBaseProps
{}
</script>

<script setup lang="ts">
const props = defineProps<ShadcnNavigationMenuTriggerProps>()

const delegatedProps = computed(() => {
    const { class: _, ...delegated } = props

    return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
    <NavigationMenuTrigger
        v-bind="forwardedProps"
        :class="cn('group', props.class)"
    >
        <slot />

        <ChevronDownIcon
            class="transition duration-200 group-data-[state=open]:rotate-180"
            aria-hidden="true"
        />
    </NavigationMenuTrigger>
</template>
