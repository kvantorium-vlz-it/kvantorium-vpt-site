<script setup lang="ts">
import { navigationMenuTriggerStyle } from '../../shadcn/ui/navigation-menu/index'

defineProps<{
    label: string
    to?: string
}>()
</script>

<template>
    <ShNavigationMenuItem>
        <ShNavigationMenuLink
            :class="navigationMenuTriggerStyle()"
            v-if="!$slots.default"
            as-child
        >
            <NuxtLink
                :to="to"
            >
                {{ label }}
            </NuxtLink>
        </ShNavigationMenuLink>

        <template v-else>
            <ShNavigationMenuTrigger>
                {{ label }}
            </ShNavigationMenuTrigger>

            <HeaderNavigationContent class="w-96">
                <div>
                    <slot></slot>
                </div>
            </HeaderNavigationContent>
        </template>
    </ShNavigationMenuItem>
</template>
