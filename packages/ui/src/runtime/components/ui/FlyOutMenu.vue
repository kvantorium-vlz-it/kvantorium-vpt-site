<script setup lang="ts">
// TODO: add possibility to open to left and right
import { computed, ref } from '#imports';
import { flip, offset, shift, useFloating, arrow as floatingArrow, autoUpdate } from '@floating-ui/vue';

type Variant = 'light' | 'dark'

interface Props {
    label: string
    variant?: Variant
}

withDefaults(defineProps<Props>(), {
    variant: 'light',
})

const trigger = ref<HTMLElement>()
const floating = ref<HTMLUListElement>()
const arrow = ref<HTMLDivElement>()

const { floatingStyles, middlewareData } = useFloating(trigger, floating, {
    placement: 'bottom',
    middleware: [
        flip(),
        offset(8),
        shift({ padding: 16 }),
        floatingArrow({ element: arrow }),
    ],
    whileElementsMounted: autoUpdate,
})

const arrowStyles = computed(() => {
    const left = `left: ${middlewareData.value.arrow?.x || 0}px`
    const top = `top: ${middlewareData.value.arrow?.y || 0}px`

    return `${left}; ${top};`
})
</script>

<template>
    <details
        :class="[$style['fly-out-menu'], $style[variant]]"
    >
        <summary
            ref="trigger"
            :class="$style.trigger"
        >
            {{ label }}

            <Icon
                name="ph:caret-down"
                :class="$style['trigger-icon']"
            />
        </summary>

        <div
            ref="floating"
            :class="$style.floating"
            :style="floatingStyles"
        >
            <slot></slot>
            <div
                ref="arrow"
                :class="$style.arrow"
                :style="arrowStyles"
            />
        </div>
    </details>
</template>

<style module>
/* Base styles */

.fly-out-menu {
    /* Variables */

    --text-color: var(--c-site-background);
    --floating-text-color: var(--c-site-text);
    --floating-background-color: var(--c-site-background);

    /* Hover variables */

    --hover-text-color: var(--text-color);

    /* Private variables */

    --_border-radius: 0.5rem;

    font-size: 1rem;
    font-family: 'Circe';
}
.trigger {
    cursor: pointer;

    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.25rem;

    width: fit-content;

    color: var(--text-color);
    transition: color 0.2s ease;
}
.fly-out-menu:hover > .trigger {
    color: var(--hover-text-color);
}
.trigger-icon {
    transition: rotate 0.2s ease;
}
.floating {
    z-index: 2;
    max-width: 20rem;
    border-radius: var(--_border-radius);
    padding: 1rem;

    background-color: var(--floating-background-color);
    color: var(--floating-text-color);

    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.2);
}
.arrow {
    position: absolute;

    translate: 0 -50%;
    rotate: 45deg;
    width: 1rem;
    aspect-ratio: 1;

    box-shadow: -0.25rem -0.25rem 0.5rem rgba(0, 0, 0, 0.1);
    background-color: var(--floating-background-color);

    pointer-events: none;
}

/* States */

.fly-out-menu[open] > .trigger > .trigger-icon {
    rotate: 180deg;
}

/* Variants */

.light {
    --text-color: var(--c-site-background-darker-1);
    --hover-text-color: var(--c-site-background);

    --floating-text-color: var(--c-site-text);
    --floating-background-color: var(--c-site-background);
}
.dark {
    --text-color: var(--c-site-text-lighter-1);
    --hover-text-color: var(--c-site-text);

    --floating-text-color: var(--c-site-text);
    --floating-background-color: var(--c-site-background);
}
</style>
