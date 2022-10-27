<script setup lang="ts">
interface ISocial {
    icon: string;
    link: string;
}

const socials = ref<ISocial[]>([
    {
        icon: 'vk',
        link: 'https://google.com'
    },
    {
        icon: 'vk',
        link: 'https://google.com'
    },
    {
        icon: 'vk',
        link: 'https://google.com'
    },
    {
        icon: 'vk',
        link: 'https://google.com'
    }
])
</script>

<template>
    <slot :socials="socials" />
</template>
