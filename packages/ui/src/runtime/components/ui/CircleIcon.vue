<script setup lang="ts">
interface Props {
    iconName: string
    color?: string
}

defineProps<Props>()
</script>

<template>
    <div :class="$style.wrapper">
        <Icon
            size="100%"
            :class="$style.icon"
            :name="iconName"
            :color="color"
        />
    </div>
</template>

<style module>
/* Base styles */

.wrapper {
    /* Variables */

    --background-color: var(--c-site-background);
    --icon-color: var(--c-site-text);

    --width: 2rem;
    --padding: 0.5rem;

    background-color: var(--background-color);

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 100vw;
    width: var(--width);
    padding: var(--padding);
    aspect-ratio: 1;
}
.icon {
    color: var(--icon-color);
    flex: 1 0 0;
}
</style>
