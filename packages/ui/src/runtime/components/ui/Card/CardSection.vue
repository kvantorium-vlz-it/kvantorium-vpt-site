<script setup lang="ts">
interface Props {
    isInset?: boolean
    isHighlighted?: boolean
    isTopBorder?: boolean
    isBottomBorder?: boolean
}

withDefaults(defineProps<Props>(), {
    isInset: false,
    isHighlighted: false,
    isBottomBorder: false,
    isTopBorder: false,
})
</script>

<template>
    <div
        :class="[
            $style.section,
            {
                [$style.inset]: isInset,
                [$style.highlight]: isHighlighted,
                [$style['top-border']]: isTopBorder,
                [$style['bottom-border']]: isBottomBorder,
            }
        ]"
    >
        <slot></slot>
    </div>
</template>

<style module>
.section:not(.inset) {
    padding: var(--padding);
}
.inset {
    overflow: hidden;
}
.inset:first-child {
    border-top-left-radius: inherit;
    border-top-right-radius: inherit;
}
.inset:last-child {
    border-bottom-left-radius: inherit;
    border-bottom-right-radius: inherit;
}
.highlight {
    background-color: var(--c-site-background-darker-1);
}
.top-border {
    border-top: 1px solid var(--c-site-background-darker-2);
}
.bottom-border {
    border-bottom: 1px solid var(--c-site-background-darker-2);
}
</style>
