<template>
    <p :class="$style.paragraph">
        <slot></slot>
    </p>
</template>

<style module>
.paragraph {
    margin-block: 0.5em;
}
</style>
