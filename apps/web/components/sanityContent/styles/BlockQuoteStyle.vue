<template>
    <blockquote :class="$style.blockquote">
        <slot></slot>
    </blockquote>
</template>

<style module>
.p {
    margin-block: 0.5em;
}
.blockquote {
    background-color: var(--c-site-background-darker-2);
    padding: 1rem;
    border-radius: 1rem;
    margin-block: 0.5em;
}
</style>
