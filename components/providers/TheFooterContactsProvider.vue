<script setup lang="ts">
type ContactType = 'link' | 'email' | 'tel' | 'geo'

interface IContact {
    type: ContactType;
    name: string;
    link: string;
    label: string;
}

const contacts = ref<IContact[]>([])
</script>

<template>
    <slot :contacts="contacts"></slot>
</template>
