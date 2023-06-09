<script setup lang="ts">
const {
    isMulticolor
} = withDefaults(defineProps<{
    isMulticolor: boolean
}>(), {
    isMulticolor: true
})

const name = computed(() => isMulticolor
    ? 'logo_multicolor'
    : 'logo_monocolor'
)
</script>

<template>
    <nuxt-icon
        class="w-fit"
        :name="name"
        :filled="isMulticolor"
    />
</template>
