<template>
    <em :class="$style.em">
        <slot></slot>
    </em>
</template>

<style module>
.em {
    font-style: italic;
}
</style>
