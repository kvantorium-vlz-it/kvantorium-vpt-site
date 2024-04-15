<template>
    <footer>
        <KContainer
            :class="$style.container"
            is-full-width
        >
            <div :class="$style.inner">
                <KGrid :class="$style.grid">
                    <slot></slot>
                </KGrid>

                <div
                    v-if="$slots.bottom"
                    :class="$style.bottom"
                >
                    <slot name="bottom"></slot>
                </div>
            </div>
        </KContainer>
    </footer>
</template>

<style module>
.container {
    --gradient-top-left-color: var(--c-site-primary-darker-1);
    --gradient-bottom-right-color: var(--c-site-secondary-darker-1);
    --text-color: var(--c-site-background);

    color: var(--text-color);
    font-family: 'Circe';
}
.inner {
    background-image: linear-gradient(
        to bottom right,
        var(--gradient-top-left-color),
        var(--gradient-bottom-right-color)
    );

    border-radius: 1rem;
    padding: 2.5rem 4rem 1rem;
}
.bottom {
    margin-top: 3.5rem;
    text-align: center;
    border-top: 2px solid var(--text-color);
    padding-top: 1rem;
}
.grid {
    --columns: 1;
}
@media screen and (min-width: 768px) {
    .grid {
        --columns: 4;
    }
}
</style>
