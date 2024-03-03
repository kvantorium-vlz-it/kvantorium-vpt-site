<template>
    <div :class="$style.card">
        <div :class="$style.header">
            <slot name="header"></slot>
        </div>

        <div :class="$style.body">
            <slot></slot>
        </div>

        <div :class="$style.footer">
            <slot name="footer"></slot>
        </div>
    </div>
</template>

<style module>
.card {
    padding: 1rem;
    padding-top: 3rem;
    border-radius: 0.75rem;
    aspect-ratio: 1;
    display: grid;
    grid-template-rows: auto 1fr auto;
    grid-template-columns: 1fr;
    gap: 1rem;
}
.header {}
.body {}
.footer {}
</style>
