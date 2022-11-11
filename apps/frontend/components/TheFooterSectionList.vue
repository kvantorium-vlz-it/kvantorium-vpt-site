<template>
  <ul :class="$style.list">
    <slot />
  </ul>
</template>

<style module lang="scss">
@use '@styles/main.scss' as *;

.list {
    display: flex;
    flex-flow: column wrap;
    gap: #{rem(8px)};

    margin: 0;
    padding: 0;

    list-style: none;
}
</style>
