<script setup lang="ts">
interface Props {
    image: string
    alt: string
    isFloating: boolean
    floatingSide?: 'left' | 'right' | null
}

defineProps<Props>()
</script>

<template>
    <img
        :src="image"
        :alt="alt"
        :class="[
            $style.image,
            isFloating ? $style[floatingSide!] : null,
            { [$style.floating]: isFloating },
        ]"
    >
</template>

<style module>
.image {
    display: block;
    object-fit: cover;
    width: 100%;
    margin-top: 1em;
    margin-bottom: 1em;
}
.floating {
    width: 40%;
    float: var(--floating);
    margin-top: 0.25em;
    margin-bottom: 0.25em;
}
.floating::after {
    content: "";
    clear: both;
    display: table;
}
.floating::before {
    content: "";
    clear: both;
    display: table;
}
.left {
    --floating: left;
    margin-right: 1ch;
}
.right {
    --floating: right;
}
</style>
