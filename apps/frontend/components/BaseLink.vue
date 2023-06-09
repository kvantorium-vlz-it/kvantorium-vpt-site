<script setup lang="ts">
import { ButtonVariant } from '@types'

withDefaults(defineProps<{
    to?: string
    variant?: ButtonVariant
}>(), {
    variant: 'blue'
})
</script>

<template>
    <NuxtLink
        :href="to"
        class="button"
        :class="`${variant === 'yellow' ? 'button-yellow' : 'button-blue'}`"
    >
        <slot></slot>
    </NuxtLink>
</template>
