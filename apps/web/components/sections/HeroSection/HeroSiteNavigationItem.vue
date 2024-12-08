<script setup lang="ts">
defineProps<{
    to?: string
}>()
</script>

<template>
    <ShNavigationMenuItem
        class="
            text-white font-body text-lg
            relative
            after:absolute
            after:top-full
            after:left-0 after:right-full after:h-0.5 after:rounded-md
            hover:after:right-0 after:bg-white
            after:transition-all
        "
    >
        <ShNavigationMenuLink as-child>
            <NuxtLink :to="to">
                <slot></slot>
            </NuxtLink>
        </ShNavigationMenuLink>
    </ShNavigationMenuItem>
</template>
