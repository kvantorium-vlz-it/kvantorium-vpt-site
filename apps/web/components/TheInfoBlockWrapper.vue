<script setup lang="ts">
const props = withDefaults(defineProps<{
    isVisible?: boolean
    animationDelay?: number
}>(), {
    isVisible: false,
    animationDelay: 0
})

const delay = computed(() => `${props.animationDelay}s`)
</script>

<template>
    <div
        :class="{
            [$style.wrapper]: true,
            [$style.visible]: isVisible,
        }"
    >
        <div :class="[$style.content, $style.left]">
            <slot name="left"></slot>
        </div>

        <div :class="$style.circle"></div>

        <div :class="[$style.content, $style.right]">
            <slot name="right"></slot>
        </div>
    </div>
</template>

<style module>
.wrapper {
    position: relative;
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    grid-template-rows: auto 1fr;
    width: fit-content;
    margin-inline: auto;
    align-items: center;
    gap: 1rem;
}
.circle {
    width: 2rem;
    aspect-ratio: 1;
    border: 2px solid var(--c-site-background-darker-2);
    border-radius: 100vw;
    grid-row: 1;
}
.wrapper:last-child .circle::after {
    background: linear-gradient(
        var(--c-site-background-darker-2),
        transparent
    );
}
.circle::after {
    content: '';
    position: absolute;
    top: 2rem;
    left: 50%;
    translate: -50%;

    bottom: 0;
    width: 2px;
    background-color: var(--c-site-background-darker-2);
}
.content {
    max-width: 28rem;
    transition: all 0.3s ease;
    transition-delay: v-bind(delay);
    opacity: 0;
    grid-row: 1 / 3;
}
.right {
    margin-left: -1rem;
    text-align: left;
}
.left {
    text-align: right;
    margin-right: -1rem;
}
.visible .content {
    margin-inline: 0;
    opacity: 1;
}
</style>
