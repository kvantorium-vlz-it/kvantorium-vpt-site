<template>
    <div :class="$style.card">
        <slot></slot>
    </div>
</template>

<style module>
.card {
    --padding: 1rem;

    border-radius: 1rem;
    border: 1px solid var(--c-site-background-darker-2);
    background-color: var(--c-site-background);

    display: flex;
    flex-direction: column;
}
</style>
