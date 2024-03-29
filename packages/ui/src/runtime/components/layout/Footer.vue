<template>
    <footer>
        <KContainer
            :class="$style.container"
            is-full-width
        >
            <div :class="$style.inner">
                <KGrid :columns="4">
                    <template
                        v-for="index in 4"
                        :key="index"
                    >
                        <div
                            v-if="$slots[`column-${index}`]"
                            :class="$style.column"
                            :style="{
                                '--index': index,
                            }"
                        >
                            <slot :name="`column-${index}`"></slot>
                        </div>
                    </template>
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
.column {
    --index: 0;
    grid-column: var(--index) / var(--index);
}
.bottom {
    margin-top: 3.5rem;
    text-align: center;
    border-top: 2px solid var(--text-color);
    padding-top: 1rem;
}
</style>
