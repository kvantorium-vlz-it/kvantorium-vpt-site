<template>
<div :class="$style.Navigation">
    <slot></slot>
</div>
</template>

<style module lang="postcss">
.Navigation {
    @apply flex flex-col gap-1;
}
</style>