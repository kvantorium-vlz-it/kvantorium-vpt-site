<script setup lang="ts">
import { ButtonVariant } from '@types';

withDefaults(defineProps<{
    variant: ButtonVariant
}>(), {
    variant: 'blue'
})

defineEmits<{
    (e: 'click', event: MouseEvent): void
}>()
</script>

<template>
    <button
        @click="(event) => $emit('click', event)"
        class="button"
        :class="`${variant === 'yellow' ? 'button-yellow' : 'button-blue'}`"
    >
        <slot></slot>
    </button>
</template>
