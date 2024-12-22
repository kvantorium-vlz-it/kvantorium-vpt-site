<script setup lang="ts">
import type { PortableTextComponentProps } from '@portabletext/vue'

defineProps<PortableTextComponentProps<{
    asset: string
}>>()
</script>

<template>
    <img class="block w-full rounded-xl" :src="value.asset">
</template>
