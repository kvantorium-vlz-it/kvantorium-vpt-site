<script setup lang="ts">
import type { NuxtLinkProps } from '#app';
import { ArrowRightIcon } from 'lucide-vue-next'

defineProps<{
    to?: NuxtLinkProps['to']
}>()
</script>

<template>
    <NuxtLink :to="to" class="font-serif text-body laptop:text-heading-5 group/navigation-item text-white inline-flex items-center gap-2 justify-center">
        <span>
            <slot></slot>
        </span>

        <ArrowRightIcon class="group-hover/navigation-item:-rotate-45 transition-transform" />
    </NuxtLink>
</template>
