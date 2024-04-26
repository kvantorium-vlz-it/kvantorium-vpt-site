<script setup lang="ts">
import { defineNuxtLink } from '#imports';
import type { LinkProps } from '../../assets/ts/types'

type Props = LinkProps & {}

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
