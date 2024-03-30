<template>
    <KTypography
        font-family="Circe"
        font-size="h4"
        #default="{ classes }"
    >
        <div
            :class="[classes, $style.badge]"
            :="$attrs"
        >
            <slot></slot>
        </div>
    </KTypography>
</template>

<style module>
.badge {
    --text-color: var(--c-site-background);
    --border-color: var(--c-site-background);

    border: 2px solid var(--border-color);
    border-radius: 100vw;
    padding: 0.25rem 1rem;

    color: var(--text-color);

    display: inline-flex;
    gap: 0.5rem;
    align-items: center;
}
</style>
