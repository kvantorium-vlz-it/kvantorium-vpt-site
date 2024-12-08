<script setup lang="ts">
defineProps<{
    to?: string
    curriculum: string
}>()
</script>

<template>
    <ShNavigationMenuItem>
        <ShNavigationMenuLink as-child>
            <NuxtLink :to="to">
                <CurriculumBadge :curriculum="curriculum" />
            </NuxtLink>
        </ShNavigationMenuLink>
    </ShNavigationMenuItem>
</template>
