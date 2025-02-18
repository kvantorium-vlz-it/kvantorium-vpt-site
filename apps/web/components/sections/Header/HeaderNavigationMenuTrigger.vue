<script lang="ts">
import type { BaseLinkProps } from '~/components/shared/Navigation/BaseLink.vue'

export interface HeaderNavigationMenuTriggerProps {
    theme?: BaseLinkProps['theme']
    size?: BaseLinkProps['size']
}
</script>

<script setup lang="ts">
defineProps<HeaderNavigationMenuTriggerProps>()
</script>

<template>
    <BaseLink
        variant="outline"
        :theme="theme"
        :size="size"
        as-child
    >
        <ShNavigationMenuTrigger>
            <slot></slot>
        </ShNavigationMenuTrigger>
    </BaseLink>
</template>
