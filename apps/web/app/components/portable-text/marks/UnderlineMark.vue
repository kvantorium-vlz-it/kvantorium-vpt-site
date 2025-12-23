<script setup lang="ts">
import type { PortableTextMarkComponentProps } from '@portabletext/vue'

defineProps<PortableTextMarkComponentProps>()
</script>

<template>
    <span class="underline">
        <slot></slot>
    </span>
</template>
