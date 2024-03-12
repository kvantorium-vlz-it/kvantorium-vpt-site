<script setup lang="ts">
interface Props {
    isFullWidth?: boolean
}

withDefaults(defineProps<Props>(), {
    isFullWidth: false,
})
</script>

<template>
    <div
        :class="{
            [$style.container]: true,
            [$style['full-width']]: isFullWidth,
        }"
    >
        <slot></slot>
    </div>
</template>

<style module>
.container {
    --margin: var(--site-margin);

    max-width: 90rem;
    padding-inline: var(--margin);
    margin-inline: auto;
}
.full-width {
    max-width: 100%;
}
</style>
