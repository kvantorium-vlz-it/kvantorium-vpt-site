<script setup lang="ts">
defineProps<{
    icon: string;
    link: string;
}>()
</script>

<template>
    <a
        :href="link"
        :title="link"
        :class="$style.social"
        target="_blank"
    >
        <nuxt-icon
            :name="icon"
            fill
        />
    </a>
</template>

<style module lang="scss">
.social {
    font-size: var(--fs-body-1);
}
</style>
