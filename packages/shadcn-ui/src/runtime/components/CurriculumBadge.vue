<script setup lang="ts">
import { ArrowUpRightIcon } from 'lucide-vue-next'

defineProps<{
    curriculum: string
}>()
</script>

<template>
    <ShBadge variant="outline" :class="$style.badge">
        <span>
            {{ curriculum }}
        </span>

        <ArrowUpRightIcon
            :size="16"
            stroke-width="1"
        />
    </ShBadge>
</template>

<style module>
.badge {
    font-family: 'Circe';
    font-weight: 400;
    font-size: 1rem;
}
</style>
