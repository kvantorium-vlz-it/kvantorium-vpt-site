<script setup lang="ts">
type Style = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

interface Props {
    style: Style
}

defineProps<Props>()
</script>

<template>
    <KTypography
        font-family="BankGothic"
        :font-weight="700"
        :font-size="style"
        #="{ classes }"
    >
        <component
            :is="style"
            :class="[classes, $style.heading]"
            :="$attrs, $props"
        >

            <slot></slot>
        </component>
    </KTypography>
</template>

<style module>
.heading {
    margin-block: 1em;
}
</style>
