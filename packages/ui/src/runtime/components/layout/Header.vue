<script setup lang="ts">
// TODO: make more abstract component
import { KContainer } from '#components';

type Variant = 'white' | 'blank'

interface Props {
    variant?: Variant
}

withDefaults(defineProps<Props>(), {
    variant: 'blank',
})
</script>

<template>
    <header :class="[$style.header, $style[variant]]">
        <KContainer is-full-width :class="$style['header-container']">
            <KGrid :items="[]" :columns="4" :class="$style.grid">
                <template v-for="index in 4">
                    <div
                        v-if="$slots[`column-${index}`]"
                        :class="$style.column"
                        :style="{ '--column': index }"
                    >
                        <slot :name="`column-${index}`" />
                    </div>
                </template>
            </KGrid>
        </KContainer>
    </header>
</template>

<style module>
.header {
    --background-color: transparent;
    padding: 0.5rem;
    position: relative;
}
.header::after {
    z-index: -1;
    content: '';
    position: absolute;
    top: 0;
    bottom: 100%;
    left: 0;
    right: 0;
    transition: 0.2s ease;
    background-color: var(--background-color);
    border-image: linear-gradient(
        to right,
        transparent,
        #cfd9e3b3,
        transparent
    );
    border-image-slice: 30;
    border-bottom-width: 1px;
    border-bottom-style: solid;
    box-shadow: 0 0.125rem 0.5rem rgba(0, 0, 0, 0.1);
}
.grid {
    align-items: center;
}
.blank {
    --background-color: transparent;
}
.white {
    --background-color: var(--c-site-background);
}
.white::after {
    bottom: 0;
}
.column {
    grid-column: var(--column);
}
</style>
