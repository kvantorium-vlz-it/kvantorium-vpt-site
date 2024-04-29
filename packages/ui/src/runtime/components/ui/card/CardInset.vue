<template>
    <div :class="$style.inset">
        <slot></slot>
    </div>
</template>

<style module>
.inset {
    margin-inline: calc(var(--padding) * -1);
    width: calc(100% + var(--padding) * 2);
    overflow: hidden;
}
</style>
