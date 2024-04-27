<script setup lang="ts">
import type { LinkProps } from '../../assets/ts/types';

type ButtonVariants = 'primary' | 'secondary' | 'white'

interface Props extends LinkProps {
    variant?: ButtonVariants
}

withDefaults(defineProps<Props>(), {
    variant: 'primary'
})
</script>

<template>
    <KTypography
        font-family="Circe"
        font-size="h4"
        #default="{ classes }"
    >
        <KBaseButton
            :class="[classes, $style.button, $style[variant]]"
            :="$props, $attrs"
        >
            <slot></slot>
        </KBaseButton>
    </KTypography>
</template>

<style module>
/* Base styles */
button.button {
    border: none;
    background-color: transparent;
    cursor: pointer;
}
.button {
    /* Variables */

    --background-color: transparent;
    --gradient-left-color: transparent;
    --gradient-right-color: transparent;
    --border-color: transparent;
    --text-color: var(--c-site-background);
    --outline-color: var(--c-site-background);

    --shadow: 0 0 transparent;

    /* Hover variables */

    --hover-text-color: var(--text-color);
    --hover-border-color: var(--border-color);
    --hover-background-color: var(--background-color);
    --hover-gradient-left-color: var(--gradient-left-color);
    --hover-gradient-right-color: var(--gradient-right-color);

    /* Private variables */

    --_border-width: 0.125rem;
    --_border-shadow: inset 0 0 0 var(--_border-width) var(--border-color);
    --_animation-time: 0.2s;

    display: inline-flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    padding: 0.25rem 2rem;

    border-radius: 100vw;
    box-shadow: var(--_border-shadow), var(--shadow);

    color: var(--text-color);
    font-family: 'Circe';
    font-size: 1rem;
    text-decoration: none;

    position: relative;
    isolation: isolate;
    overflow: hidden;

    transition: var(--_animation-time) ease-in-out;
    transition-property: color, scale, translate, box-shadow;
}
.button::before, .button::after {
    content: '';

    position: absolute;
    z-index: -1;
    top: 0;
    bottom: 0;

    transition: var(--_animation-time) ease-out;
    transition-property: left, right, transform, scale;
    transform: skew(-15deg);
    scale: 1.1;
}
.button::before {
    left: 0;
    right: 0;

    background-color: var(--background-color);
    background-image: linear-gradient(
        90deg,
        var(--gradient-left-color),
        var(--gradient-right-color)
    );
}
.button::after {
    left: 0;
    right: 100%;

    background-color: var(--hover-background-color);
    background-image: linear-gradient(
        90deg,
        var(--hover-gradient-left-color),
        var(--hover-gradient-right-color)
    );
}

/* States */

.button:not([href], button) {
    cursor: not-allowed;
}
.button[href]:active, button.button:active {
    translate: 0 -0.125rem;
}
.button:focus-visible {
    outline-color: var(--outline-color);
    outline-width: 0.125rem;
    outline-offset: 0.125rem;
    outline-style: dashed;
}
.button:hover {
    --shadow: 0 0 0.5rem rgba(0, 0, 0, 0.2);

    color: var(--hover-text-color);
}

/* Hover background animation */

.button:hover::before, .button:hover::after {
    transform: skew(0);
}
.button:hover::before {
    left: 100%;
}
.button:hover::after {
    right: 0;
}

/* Variants */

.primary {
    --gradient-left-color: var(--c-site-primary);
    --gradient-right-color: var(--c-site-secondary-darker-1);

    --hover-gradient-left-color: var(--c-site-secondary);
    --hover-gradient-right-color: var(--c-site-primary);
}
.secondary {
    --gradient-left-color: var(--c-site-secondary);
    --gradient-right-color: var(--c-site-secondary-lighter-1);

    --hover-gradient-left-color: var(--c-site-secondary-lighter-1);
    --hover-gradient-right-color: var(--c-site-secondary);
}
.white {
    --border-color: var(--c-site-background);
    --hover-background-color: var(--c-site-background);

    --hover-text-color: var(--c-site-text);
}
</style>
