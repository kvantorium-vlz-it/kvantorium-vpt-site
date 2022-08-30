<template>
<div :class="$style.Copyright">
    {{ text }}
</div>
</template>

<script setup lang="ts">
const text = '© 2022 Кванториум ВОЛЖСКИЙ ПОЛИТЕХ'
</script>

<style module lang="postcss">
.Copyright {
    @apply pt-4;
    @apply border-t border-primary-400;
    @apply text-center text-body16 text-primary-300;
}
</style>