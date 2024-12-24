<script setup lang="ts">
import type { PortableTextComponentProps } from '@portabletext/vue'

defineProps<PortableTextComponentProps<{}>>()

defineOptions({
    inheritAttrs: false,
})
</script>

<template>
    <p class="font-body">
        <slot></slot>
    </p>
</template>
