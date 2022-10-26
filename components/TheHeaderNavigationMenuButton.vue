<template>
    <button :class="$style.button">
        <nuxt-icon
            name="menu"
            :class="$style.button__icon"
        />
    </button>
</template>

<style module lang="scss">
@use '@styles/functional' as *;

.button {
    cursor: pointer;

    padding: 0;

    background: none;
    border: none;

    &__icon {
        font-size: #{px-to-rem(24px)};
        color: rgb(var(--c-white));
    }
}
</style>
