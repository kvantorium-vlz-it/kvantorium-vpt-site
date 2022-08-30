<template>
<address :class="$style.Contacts">
    <slot></slot>
</address>
</template>

<style module lang="postcss">
.Contacts {
    @apply flex flex-col gap-2;
}
</style>