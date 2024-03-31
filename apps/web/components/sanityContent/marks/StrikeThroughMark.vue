<template>
    <span :class="$style['strike-through']">
        <slot></slot>
    </span>
</template>

<style module>
.strike-through {
    text-decoration: line-through;
}
</style>
