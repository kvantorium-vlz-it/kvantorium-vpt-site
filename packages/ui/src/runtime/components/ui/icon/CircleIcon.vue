<script setup lang="ts">
type Variant = 'white' | 'primary' | 'secondary'

interface Props {
    iconName?: string
    color?: string
    variant?: Variant
}

withDefaults(defineProps<Props>(), {
    iconName: '',
})
</script>

<template>
    <div
        :class="[
            $style.wrapper,
            variant && $style[variant],
        ]"
    >
        <slot>
            <Icon
                :class="$style.icon"
                :name="iconName"
                :color="color || ''"
            />
        </slot>
    </div>
</template>

<style module>
.wrapper {
    --background-color: transparent;
    --icon-color: black;
    --border-color: transparent;

    --shadow: 0 0 0 transparent;

    --_border-width: 1px;

    --_border-shadow: inset 0 0 0 var(--_border-width) var(--border-color);

    background-color: var(--background-color);
    box-shadow: var(--shadow), var(--_border-shadow);

    display: inline-flex;
    padding: 0.5rem;
    border-radius: 100vw;
}

.primary {
    --icon-color: var(--c-site-primary);
    --border-color: var(--c-site-primary);
    --background-color: var(--c-site-background);
}

.secondary {
    --icon-color: var(--c-site-secondary);
    --border-color: var(--c-site-secondary);
    --background-color: var(--c-site-background);
}

.white {
    --icon-color: var(--c-site-text-lighter-2);
    --border-color: var(--c-site-background-darker-2);
    --background-color: var(--c-site-background);
}

.wrapper > * {
    aspect-ratio: 1;
    color: var(--icon-color);
}
</style>
