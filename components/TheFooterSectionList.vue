<template>
    <ul :class="$style.list">
        <slot />
    </ul>
</template>

<style module lang="scss">
@use '@styles/functional' as *;

.list {
    display: flex;
    flex-flow: column wrap;
    gap: #{px-to-rem(8px)};

    margin: 0;
    padding: 0;

    list-style: none;
}
</style>
