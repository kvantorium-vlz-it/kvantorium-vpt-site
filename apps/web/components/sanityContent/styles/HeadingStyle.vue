<script setup lang="ts">
import type { KBaseTypography } from '#components'
import type { BaseTypographyProps } from 'ui/props'

type Style = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

const typographyMapping = new Map<Style, BaseTypographyProps['variant']>([
    ['h1', 'heading-1'],
    ['h2', 'heading-2'],
    ['h3', 'heading-3'],
    ['h4', 'heading-4'],
    ['h5', 'heading-5'],
    ['h6', 'heading-6'],
])

interface Props {
    style: Style
}

defineProps<Props>()
</script>

<template>
    <KBaseTypography
        :variant="typographyMapping.get(style)"
        #="{ classes }"
    >
        <component
            :is="style"
            :class="[classes, $style.heading]"
            :="$attrs, $props"
        >

            <slot></slot>
        </component>
    </KBaseTypography>
</template>

<style module>
.heading {
    margin-block: 0.75em;
}
</style>
