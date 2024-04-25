<script setup lang="ts">
interface Props {
    isHighlighted?: boolean
}

withDefaults(defineProps<Props>(), {
    isHighlighted: false,
})
</script>

<template>
    <KCardInset
        :class="[
            $style.body,
            {
                [$style['highlighted']]: isHighlighted,
            },
        ]"
    >
        <slot></slot>
    </KCardInset>
</template>

<style module>
.body {
    padding-inline: var(--padding);
}
.highlighted {
    padding-block: var(--padding);
    background-color: var(--c-site-background-darker-1);
}
.highlighted:not(:first-child) {
    border-top: 1px solid var(--c-site-background-darker-2);
}
.highlighted:not(:last-child) {
    border-bottom: 1px solid var(--c-site-background-darker-2);
}
</style>
