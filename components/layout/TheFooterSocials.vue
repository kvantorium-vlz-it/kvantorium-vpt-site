<template>
<div :class="$style.Socials">
    <slot></slot>
</div>
</template>

<style module lang="postcss">
.Socials {
    @apply flex justify-end gap-1;
}
</style>