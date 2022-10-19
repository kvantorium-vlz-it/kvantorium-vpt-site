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
    background: none;
    border: none;
    cursor: pointer;

    &__icon {
        color: rgb(var(--c-white));
        font-size: 1.5rem;
    }
}
</style>
