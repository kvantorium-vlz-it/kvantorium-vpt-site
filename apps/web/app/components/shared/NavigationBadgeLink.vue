<script setup lang="ts">
import type { NuxtLinkProps } from '#app';
import { ArrowUpRightIcon } from 'lucide-vue-next'

defineProps<{
    to?: NuxtLinkProps['to']
}>()
</script>

<template>
    <ShBadge variant="outline" class="font-serif text-body laptop:text-heading-5 group/navigation-item">
        <NuxtLink :to="to" class="text-white inline-flex items-center gap-2 justify-center">
            <slot></slot>

            <ArrowUpRightIcon class="group-hover/navigation-item:-translate-y-1 group-hover/navigation-item:translate-x-1 transition-transform" />
        </NuxtLink>
    </ShBadge>
</template>
