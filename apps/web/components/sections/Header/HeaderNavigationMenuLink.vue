<script lang="ts">
import { ArrowUpRightIcon } from 'lucide-vue-next'
import type { BaseLinkProps } from '~/components/shared/Navigation/BaseLink.vue'

export interface HeaderNavigationMenuLinkProps {
    size?: BaseLinkProps['size']
    theme?: BaseLinkProps['theme']
    to?: BaseLinkProps['to']
    class?: BaseLinkProps['class']
}
</script>

<script setup lang="ts">
defineProps<HeaderNavigationMenuLinkProps>()
</script>

<template>
    <ShNavigationMenuLink as-child>
        <BaseLink
            variant="default"
            :theme="theme"
            :size="size"
            :class="class"
            :to="to"
        >
            <slot></slot>

            <ArrowUpRightIcon class="group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
        </BaseLink>
    </ShNavigationMenuLink>
</template>
