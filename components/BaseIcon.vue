<script setup lang="ts">
/**
 * Allowed icons
 */
export type icon = 'chevron' |
    'menu' |
    'document' |
    'vk'

const props = defineProps<{
    /**
     * Icon to display
     */
    icon: icon;
}>()

/**
 * Raw icon svg
 */
const rawIcon = ref<string>()

/**
 * Fetching raw svg
 */
watch(props, async () => {
    rawIcon.value = (await import(`/assets/icons/${props.icon}.svg?raw`)).default
}, {
    immediate: true
})

/**
 * Computed icon to display
 */
const icon = computed(() => rawIcon.value)
</script>

<template>
<div v-html="icon"></div>
</template>