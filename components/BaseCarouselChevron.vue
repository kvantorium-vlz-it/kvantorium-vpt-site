<template>
    <button :class="$style.chevron">
        <nuxt-icon name="chevron" />
    </button>
</template>

<style module lang="scss">
@use '@styles/functional' as *;

.chevron {
    cursor: pointer;

    padding: 0;

    font-size: #{px-to-rem(24px)};

    background: none;
    border: none;
}
</style>
