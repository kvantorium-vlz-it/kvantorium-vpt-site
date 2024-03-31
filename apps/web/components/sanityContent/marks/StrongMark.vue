<template>
    <strong :class="$style.strong">
        <slot></slot>
    </strong>
</template>

<style module>
.strong {
    font-weight: 700;
}
</style>
