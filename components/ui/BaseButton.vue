<!--
    Base button component

    Can display any content passind in it or can display text passed in as prop

    - TODO(style): Add styles for disabled button;
    - TODO(a11y): Add more accessibility.
-->
<template>
<button
    :class="{
        [$style.Button]: true,
        [$style[theme]]: true,
    }"
>
    <!--
        @slot Button content  
        Have priority over `text` prop
    -->
    <slot>
        {{ text }}
    </slot>
</button>
</template>

<script setup lang="ts">
import { capitalizeFirstLetter } from '@/assets/ts/utils'
import { ButtonHTMLAttributes } from 'vue'

/** Allowed button themes */
export type buttonTheme = 'light' | 'dark'

interface props extends ButtonHTMLAttributes {
    /**
     * Button theme
     */
    theme?: buttonTheme,

    /**
     * Button text
     * 
     * If prop passed and button have slot, then slot will override prop.
     */
    text?: string;
}

const props = withDefaults(defineProps<props>(), {
    theme: 'light',
    disabled: false,
})

/**
 * Button theme with capitalized first letter for find css class
 */
const theme = computed<string>(() => {
    return capitalizeFirstLetter(props.theme)
})
</script>

<style module lang="postcss">
.Button {
    @apply flex p-2 justify-center align-middle gap-1;
    @apply text-body16;
    @apply border-2 border-solid rounded-full;

    &.Dark {
        @apply bg-primary-800  text-primary-300;
        @apply border-primary-300;
    }
    &.Light {
        @apply bg-primary-300  text-primary-600;
        @apply border-primary-600;
    }
}
</style>