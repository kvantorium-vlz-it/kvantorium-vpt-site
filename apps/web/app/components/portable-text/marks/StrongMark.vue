<script setup lang="ts">
import type { PortableTextMarkComponentProps } from '@portabletext/vue'

defineProps<PortableTextMarkComponentProps>()
</script>

<template>
    <strong class="font-bold">
        <slot></slot>
    </strong>
</template>
