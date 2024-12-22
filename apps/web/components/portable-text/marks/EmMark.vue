<script setup lang="ts">
import type { PortableTextMarkComponentProps } from '@portabletext/vue'

defineProps<PortableTextMarkComponentProps>()
</script>

<template>
    <em class="italic">
        <slot></slot>
    </em>
</template>
