<template>
    <button :class="$style.button">
        <nuxt-icon
            name="menu"
            :class="$style.button__icon"
        />
    </button>
</template>

<style module lang="scss">
.button {
    cursor: pointer;

    background: none;
    border: none;

    &__icon {
        font-size: 1.5rem;
        color: rgb(var(--c-white));
    }
}
</style>
