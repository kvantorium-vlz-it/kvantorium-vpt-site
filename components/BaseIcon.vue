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

const iconName = toRef(props, 'icon')

/**
 * Raw icon svg
 */
const rawIcon = ref<string>()

/**
 * Fetching raw svg
 */
watch(iconName, async () => {
    rawIcon.value = (await import(  /* @vite-ignore */ `/assets/icons/${iconName.value}.svg?raw`)).default
}, {
    immediate: true
})

/**
 * Computed icon to display
 */
const icon = computed(() => rawIcon.value)
</script>

<template>
<div
    v-if="icon"
    v-html="icon"
></div>
<div v-else>
    {{ iconName }}
</div>
</template>