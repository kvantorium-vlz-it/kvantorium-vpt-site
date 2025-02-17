<script lang="ts">
import type {
    ShadcnNavigationMenuLinkProps
} from '~/components/shadcn/navigation-menu/NavigationMenuLink.vue'
import { ArrowUpRightIcon } from 'lucide-vue-next'

export interface HeaderNavigationMenuLinkProps {
    size?: ShadcnNavigationMenuLinkProps['size']
    color?: ShadcnNavigationMenuLinkProps['color']
    to?: ShadcnNavigationMenuLinkProps['to']
}
</script>

<script setup lang="ts">
defineProps<HeaderNavigationMenuLinkProps>()
</script>

<template>
    <ShNavigationMenuLink
        :size="size"
        :color="color"
        :to="to"
    >
        <slot></slot>

        <ArrowUpRightIcon
            class="group-hover/link:translate-x-1 group-hover/link:-translate-y-1"
        />
    </ShNavigationMenuLink>
</template>
