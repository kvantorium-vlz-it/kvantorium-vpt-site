<template>
    <KBaseTypography
        variant="label-2"
        #="{ classes }"
    >
        <span
            :class="[classes, $style.badge]"
            :="$attrs"
        >
            <slot></slot>
        </span>
    </KBaseTypography>
</template>

<style module>
.badge {
    --text-color: var(--c-site-background);
    --border-color: var(--c-site-background);

    border: 0.125rem solid var(--border-color);
    border-radius: 100vw;
    padding: 0.125rem 1.25rem;

    color: var(--text-color);

    display: inline-flex;
    gap: 0.5rem;
    align-items: center;

    --weight: 500;
}
</style>
