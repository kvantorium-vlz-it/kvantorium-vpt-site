<script lang="ts">
import type { NavigationMenuItemProps } from 'radix-vue'
import { NavigationMenuItem } from 'radix-vue'

export interface ShadcnNavigationMenuItemProps
extends
    NavigationMenuItemProps
{}
</script>

<script setup lang="ts">
const props = defineProps<ShadcnNavigationMenuItemProps>()
</script>

<template>
    <NavigationMenuItem v-bind="props">
        <slot />
    </NavigationMenuItem>
</template>
