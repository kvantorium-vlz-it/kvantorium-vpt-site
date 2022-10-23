<script setup lang="ts">
interface ISocial {
    icon: string;
    link: string;
}

const socials = ref<ISocial[]>([])
</script>

<template>
    <slot :socials="socials"></slot>
</template>
