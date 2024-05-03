<template>
    <KBaseTypography
        variant="body-3"
        #="{ classes }"
    >
        <blockquote :class="[$style.blockquote, classes]">
            <slot></slot>
        </blockquote>
    </KBaseTypography>
</template>

<style module>
.p {
    margin-block: 0.5em;
}
.blockquote {
    background-color: var(--c-site-background-darker-2);
    padding: 1rem 1.5rem;
    border-radius: 1rem;
    margin-block: 0.5em;
}
</style>
