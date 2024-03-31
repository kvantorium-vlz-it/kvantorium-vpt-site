<template>
    <code :class="$style.code">
        <slot></slot>
    </code>
</template>

<style module>
.code {
    display: inline-block;
    padding-inline: 0.5ch;
    background-color: var(--c-site-background-darker-2);
    border-radius: 0.25rem;
    text-indent: 0;
}
</style>
