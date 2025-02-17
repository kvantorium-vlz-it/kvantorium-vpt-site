<script lang="ts">
import type {
    ShadcnNavigationMenuTriggerProps
} from '~/components/shadcn/navigation-menu/NavigationMenuTrigger.vue'

export interface HeaderNavigationMenuTriggerProps {
    color?: ShadcnNavigationMenuTriggerProps['color']
    size?: ShadcnNavigationMenuTriggerProps['size']
}
</script>

<script setup lang="ts">
defineProps<HeaderNavigationMenuTriggerProps>()
</script>

<template>
    <ShNavigationMenuTrigger
        :color="color"
        :size="size"
    >
        <slot></slot>
    </ShNavigationMenuTrigger>
</template>
