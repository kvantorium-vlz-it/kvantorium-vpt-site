<template>
    <span :class="$style.underline">
        <slot></slot>
    </span>
</template>

<style module>
.underline {
    text-decoration: underline;
}
</style>
