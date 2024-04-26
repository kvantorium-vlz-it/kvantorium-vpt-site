<script setup lang="ts">
import { defineNuxtLink } from '#imports';
import type { RouterLinkProps } from '#vue-router'

interface Props extends Omit<RouterLinkProps, 'to'> {
    to?: RouterLinkProps['to']
}

defineProps<Props>()
</script>

<template>
    <component
        :is="!to ? 'button' : defineNuxtLink($props)"
        :="$props, $attrs"
    >
        <slot></slot>
    </component>
</template>
